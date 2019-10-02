import * as React from 'react';
import { Fragment } from 'react';

interface IProps {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
}

export default function Title(props: IProps) {
  const { children, align } = props;
  const alignStyles = {
    textAlign: align
  };

  return (
    <Fragment>
      <h1 style={alignStyles}>{children}</h1>
    </Fragment>
  );
}

Title.deafultProps = {
  children: 'Your text here...',
  align: 'center'
};
