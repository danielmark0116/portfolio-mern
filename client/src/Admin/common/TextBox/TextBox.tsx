import React from 'react';
import ReactHtmlParser from 'react-html-parser';

interface IProps {
  children: string;
  html: string;
  htmlParse?: Boolean;
}

const TextBox = (props: IProps) => {
  const { children, html, htmlParse } = props;

  return (
    <div style={{ padding: '0 5px' }}>
      {htmlParse ? ReactHtmlParser(html) : <p>{children}</p>}
    </div>
  );
};

TextBox.defaultProps = {
  htmlParse: false,
  html: '',
  children: ''
};

export default TextBox;
