import * as React from 'react';
import { Fragment } from 'react';

interface IProps {
  children?: React.ReactNode;
}

export default function Title(props: IProps) {
  const { children } = props;
  return (
    <Fragment>
      <h1>{children}</h1>
    </Fragment>
  );
}

Title.deafultProps = {
  children: 'Your text here...'
};
