import React, { Component, Fragment } from 'react';
import { stateToProps, dispatchToProps } from './ProjectFormContainer';
import { Redirect } from 'react-router-dom';

import Title from '../../common/Title/Title';
import Subtitle from '../../common/Subtitle/Subtitle';
import Form from '../../common/Form/Form';
import FileInput from '../../common/FileInput/FileInput';

import { parseFormData } from '../../../utils/parseFormData';
import { isAnyInputEmpty } from '../../../utils/emptyFormValidate';

type Props = stateToProps & dispatchToProps;

interface IState {
  test: any;
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
      test: 'any',
      pageTitle: this.props.edit ? 'Edit' : 'Add new',
      file: null,
      withPic: true,
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
    const { edit, editProject, addProject, singleProject } = this.props;

    this.setState({ formInvalid: isAnyInputEmpty(input) });

    if (!edit || withPic) {
      if (file) {
        const formData = parseFormData(input);
        formData.set('pic', file[0]);

        withPic &&
          edit &&
          !isAnyInputEmpty(input) &&
          editProject(singleProject._id, formData, true);
        !edit && !isAnyInputEmpty(input) && addProject(formData);
      } else {
        this.setState({ formInvalid: true });
        this.formAlert();
      }
    } else {
      const formData = parseFormData(input);

      !isAnyInputEmpty(input)
        ? editProject(singleProject._id, formData, false)
        : this.formAlert();
    }
  };

  editForm = () => {
    const { singleProject, edit } = this.props;
    const { pageTitle, withPic, redirect, formInvalid } = this.state;

    return (
      <Fragment>
        <Subtitle>{pageTitle}</Subtitle>
        {edit && <Title>{singleProject.title || ''}</Title>}
        {edit && (
          <button onClick={this.handleFileSwitch}>
            {JSON.stringify(withPic)}
          </button>
        )}
        <br />
        {withPic && <FileInput action={this.handleFile} error={formInvalid} />}
        <Form
          formInvalid={formInvalid}
          spaced={true}
          inputs={[
            {
              fieldName: 'title',
              label: 'Title',
              initValue: edit ? singleProject.title || '' : '',
              extended: false
            },
            {
              fieldName: 'tags',
              label: 'Tags',
              initValue: edit
                ? singleProject.tags
                  ? singleProject.tags.join(',')
                  : ''
                : '',
              extended: false
            },
            {
              fieldName: 'category',
              label: 'Category',
              initValue: edit ? singleProject.category || '' : '',
              extended: false
            },
            {
              fieldName: 'short_desc',
              label: 'Short description',
              initValue: edit ? singleProject.short_desc || '' : '',
              extended: false
            },
            {
              fieldName: 'desc',
              label: 'Description',
              initValue: edit ? singleProject.desc || '' : '',
              extended: true
            },
            {
              fieldName: 'link',
              label: 'Link',
              initValue: edit ? singleProject.link || '' : '',
              extended: false
            },
            {
              fieldName: 'repo_link',
              label: 'Repo link',
              initValue: edit ? singleProject.repo_link || '' : '',
              extended: false
            },
            {
              fieldName: 'technologies',
              label: 'technologies',
              initValue: edit
                ? singleProject.technologies
                  ? singleProject.technologies.join(',')
                  : ''
                : '',
              extended: false
            }
          ]}
          submitAction={this.handleSubmit}
          cancelAction={() => this.handleCancelRedirect()}
        />
        {redirect && <Redirect push to="/admin/projects" />}
      </Fragment>
    );
  };

  render() {
    const { pending, error, success } = this.props.requestData;
    const { singleProject, edit } = this.props;

    if (!edit) return this.editForm();
    if (!pending && success && singleProject && !error) return this.editForm();
    if (error) return <h4>sth went wrong</h4>;
    return <div>loading</div>;
  }
}
