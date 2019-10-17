import React, { Component, Fragment } from 'react';
import { stateToProps, dispatchToProps } from './PostFormContainer';
import { Redirect } from 'react-router-dom';

import Title from '../../common/Title/Title';
import Subtitle from '../../common/Subtitle/Subtitle';
import Form from '../../common/Form/Form';
import FileInput from '../../common/FileInput/FileInput';
import Switch from '../../common/Switch/Switch';

import { parseFormData } from '../../../utils/parseFormData';
import { isAnyInputEmpty } from '../../../utils/emptyFormValidate';
import Loader from '../../common/Loader/Loader';

type Props = stateToProps & dispatchToProps;

interface IState {
  pageTitle: string;
  file: FileList | null;
  withPic: Boolean;
  redirect: Boolean;
  formInvalid: Boolean;
}

export default class ProjectForm extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pageTitle: this.props.edit ? 'Edit' : 'Add new post',
      file: null,
      withPic: this.props.picDisable ? false : this.props.edit ? false : true,
      redirect: false,
      formInvalid: false
    };
  }

  componentDidMount() {
    const { edit, idToEdit, getOne } = this.props;

    if (edit) {
      getOne(idToEdit);
    }
  }

  handleFileSwitch = () => {
    this.setState({
      withPic: !this.state.withPic
    });
  };

  handleFile = (files: FileList) => {
    this.setState({
      file: files
    });
  };

  handleCancelRedirect = () => this.setState({ redirect: true });

  formAlert = () => {
    alert('Invalid form. Double check it');
  };

  handleSubmit = (input: any) => {
    const { withPic, file, formInvalid } = this.state;
    const { edit, editPost, addPost, singlePost, picDisable } = this.props;

    this.setState({ formInvalid: isAnyInputEmpty(input) });

    if ((!edit || withPic) && !picDisable) {
      if (file) {
        const formData = parseFormData(input);
        formData.set('pic', file[0]);

        withPic &&
          edit &&
          !isAnyInputEmpty(input) &&
          editPost(singlePost.id, picDisable ? input : formData, true);
        !edit &&
          !isAnyInputEmpty(input) &&
          addPost(picDisable ? input : formData);
      } else {
        this.setState({ formInvalid: true });
        this.formAlert();
      }
    } else {
      const formData = parseFormData(input);

      !isAnyInputEmpty(input)
        ? edit
          ? editPost(singlePost.id, picDisable ? input : formData, false)
          : addPost(input)
        : this.formAlert();
    }
  };

  editForm = () => {
    const { singlePost, edit, picDisable } = this.props;
    const { pageTitle, withPic, redirect, formInvalid } = this.state;

    return (
      <Fragment>
        <Subtitle>{pageTitle}</Subtitle>
        {edit && <Title>{singlePost.title || ''}</Title>}
        <br />
        {edit && !picDisable && (
          <Switch
            active={withPic}
            action={this.handleFileSwitch}
            inactiveText="change pic"
            activeText="do not change pic"
          />
        )}
        {withPic && !picDisable && (
          <FileInput action={this.handleFile} error={formInvalid} />
        )}
        <Form
          formInvalid={formInvalid}
          spaced={true}
          inputs={[
            {
              fieldName: 'title',
              label: 'Title',
              initValue: edit ? singlePost.title || '' : '',
              extended: false
            },
            {
              fieldName: 'author',
              label: 'Author',
              initValue: edit ? singlePost.author || '' : '',
              extended: false
            },
            {
              fieldName: 'content',
              label: 'Post text',
              initValue: edit ? singlePost.content || '' : '',
              extended: true
            }
          ]}
          submitAction={this.handleSubmit}
          cancelAction={() => this.handleCancelRedirect()}
        />
        {redirect && <Redirect push to="/admin/posts" />}
      </Fragment>
    );
  };

  render() {
    const { pending, error, success } = this.props.requestData;
    const { singlePost, edit } = this.props;

    if (!edit) return this.editForm();
    if (!pending && success && singlePost && !error) return this.editForm();
    if (error) return <h4>sth went wrong</h4>;
    return <Loader></Loader>;
  }
}
