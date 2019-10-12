import React, { Component, Fragment } from 'react';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import SizedBox from '../SizedBox/SizedBox';

import style from './form.module.scss';

interface IProps {
  inputs: {
    fieldName: string;
    label: string;
    initValue: string;
    extended: Boolean;
  }[];
  submitAction: Function;
  cancelAction: Function;
  formData: Boolean;
  spaced: Boolean;
}

interface IState {
  inputs: any;
}

class Form extends Component<IProps, IState> {
  static defaultProps = {
    formData: false,
    spaced: false
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      inputs: {}
    };
    const { inputs } = this.props;

    inputs.forEach(input => {
      this.state = {
        inputs: { ...this.state.inputs, [input.fieldName]: input.initValue }
      };
    });
  }

  handleInput = (value: string, nameOfField: string) => {
    this.setState({
      inputs: { ...this.state.inputs, [nameOfField]: value }
    });
  };

  handleSubmit = () => {
    this.props.submitAction(this.state.inputs);
  };

  handleCancel = () => {
    this.props.cancelAction();
  };

  render() {
    const { inputs, spaced } = this.props;

    return (
      <Fragment>
        <form
          className={style.form}
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          {inputs.map((input, index) => (
            <div key={index}>
              {input.label && (
                <label className={style.form_label}>{input.label}</label>
              )}
              <TextInput
                name={input.fieldName}
                extended={input.extended}
                value={input.initValue}
                callback={this.handleInput}
              ></TextInput>
              {spaced && <SizedBox space={10} />}
            </div>
          ))}
        </form>
        <Button action={this.handleSubmit}>submit</Button>
        <Button type="secondary" action={this.handleCancel}>
          cancel
        </Button>
        {spaced && <SizedBox space={100} />}
      </Fragment>
    );
  }
}

export default Form;
