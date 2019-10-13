import React, { useState } from 'react';

import style from './fileinput.module.scss';

interface IProps {
  action: Function;
  error: Boolean;
}

const FileInput = (props: IProps) => {
  const { action, error } = props;
  const [fileInput, handleInput] = useState({ length: 0 });

  return (
    <input
      className={`${style.file_input} ${error &&
        fileInput.length === 0 &&
        style.danger}`}
      style={{ margin: '0 0 40px' }}
      type="file"
      accept="image/png, image/jpeg"
      onChange={e => {
        action(e.target.files);
        const files = e.target.files;
        files ? handleInput(files) : handleInput({ length: 0 });
      }}
    />
  );
};

FileInput.defaultProps = {
  error: false
};

export default FileInput;
