import React, { Component, Fragment } from 'react';
import TextInput from '../TextInput/TextInput';

interface IProps {
  inputs: {
    fieldName: string;
    initValue: string;
    extended: Boolean;
  }[];
  submitAction: Function;
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
    console.log('cancelled form');
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
            <TextInput
              name={input.fieldName}
              key={index}
              extended={input.extended}
              value={input.initValue}
              callback={this.handleInput}
            ></TextInput>
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
