import React, { useState, Component, FormEvent } from 'react';
import Editor from 'react-medium-editor';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import style from './text_input.module.scss';

interface IProps {
  value: string;
  extended?: Boolean;
  callback: Function;
  name: string;
}

interface IState {
  inputValue: string;
}

class TextInput extends Component<IProps, IState> {
  static defaultProps = {
    value: '',
    extended: false,
    callback: () => null
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: this.props.value
    };
    const { value, name, callback } = this.props;
    callback(value, name);
  }

  componentDidMount() {
    const { callback, name, extended, value } = this.props;
    const { inputValue } = this.state;

    extended &&
      this.setState(
        {
          inputValue: value
        },
        () => callback(inputValue, name)
      );
  }

  handleInput = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    const { callback, name } = this.props;

    this.setState(
      {
        inputValue: target.value
      },
      () => {
        callback(this.state.inputValue, name);
      }
    );
  };

  handleEditor = (string: string) => {
    const { callback, name } = this.props;

    this.setState(
      {
        inputValue: string
      },
      () => {
        callback(this.state.inputValue, name);
      }
    );
  };

  render() {
    const { extended } = this.props;
    const { inputValue } = this.state;

    return (
      <div className={style.text_input_container}>
        {extended ? (
          <div className={style.text_input_medium_container}>
            <Editor
              options={{
                toolbar: { buttons: ['bold', 'italic', 'underline'] }
              }}
              text={inputValue}
              onChange={(resp: string) => {
                this.handleEditor(resp);
              }}
              className={style.text_input_medium}
            />
          </div>
        ) : (
          <div className={style.text_input}>
            <input
              type="text"
              placeholder="Place your input here..."
              value={inputValue}
              onChange={e => {
                this.handleInput(e);
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default TextInput;
