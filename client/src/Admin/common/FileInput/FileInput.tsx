import React from 'react';

interface IProps {
  action: Function;
}

const FileInput = (props: IProps) => {
  const { action } = props;

  return (
    <input
      style={{ margin: '0 0 40px' }}
      type="file"
      accept="image/png, image/jpeg"
      onChange={e => {
        action(e.target.files);
      }}
    />
  );
};

export default FileInput;
