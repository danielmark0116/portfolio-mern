import React, { useEffect } from 'react';
import { Fragment } from 'react';
import HTMLParser from 'react-html-parser';

import { fadeIn as animation } from '../../animations/fades';

import textStyle2 from './text.module.scss';

import textStyle from '../../styles/main.module.scss';

interface IProps {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  animate?: Boolean;
  fadeDelay?: number;
  htmlParse: Boolean;
  html: string;
}

export default function Text(props: IProps) {
  const { children, align, htmlParse, html } = props;
  const styles = {
    textAlign: align,
    margin: '0 0 10px'
  };

  const titleRef = React.createRef<HTMLHeadingElement>();

  useEffect(() => {
    const { animate, fadeDelay } = props;

    animate && animation(titleRef.current, fadeDelay);
  }, []);

  if (htmlParse)
    return (
      <div className={textStyle.parsed_html_container}>{HTMLParser(html)}</div>
    );

  return (
    <Fragment>
      <p ref={titleRef} style={styles}>
        {children}
      </p>
    </Fragment>
  );
}

Text.defaultProps = {
  children: 'Your text here...',
  align: 'left',
  animate: false,
  fadeDelay: 0,
  htmlParse: false,
  html: ''
};
