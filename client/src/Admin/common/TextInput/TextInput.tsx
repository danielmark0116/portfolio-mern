import React, { useState } from 'react';
import Editor from 'react-medium-editor';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import style from './text_input.module.scss';

interface IProps {
  value?: string;
  extended?: Boolean;
  callback: Function;
  name: string;
}

const TextInput = (props: IProps) => {
  const { value, extended, callback, name } = props;
  const [editorValue, handleEditor] = useState(value);

  return (
    <div className={style.text_input_container}>
      {extended ? (
        <div className={style.text_input_medium_container}>
          <Editor
            options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
            text={editorValue}
            onChange={(resp: string) => {
              handleEditor(resp);
              callback(editorValue, name);
              console.log(editorValue);
            }}
            className={style.text_input_medium}
          />
        </div>
      ) : (
        <div className={style.text_input}>
          <input
            type="text"
            placeholder="Place your input here..."
            value={editorValue}
            onChange={e => {
              handleEditor(e.target.value);
              callback(editorValue, name);
              console.log(editorValue);
            }}
          />
        </div>
      )}
    </div>
  );
};

TextInput.defaultProps = {
  value: '',
  extended: false,
  callback: (inputValue: string) => null
};

export default TextInput;
