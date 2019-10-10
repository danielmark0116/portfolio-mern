import React, { Component, Fragment } from 'react';
import TextInput from '../TextInput/TextInput';

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
}

interface IState {
  inputs: any;
}

class Form extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      inputs: {}
    };
    const { inputs } = this.props;

    inputs.forEach(input => {
      this.state = {
        inputs: { ...this.state.inputs, [input.fieldName]: '' }
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
    const { inputs } = this.props;

    return (
      <Fragment>
        <form
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
            </div>
          ))}
        </form>
        <button
          onClick={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          submit
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            this.handleCancel();
          }}
        >
          cancel
        </button>
      </Fragment>
    );
  }
}

export default Form;
