import * as React from 'react';
import { Fragment } from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  position: 1 | 2;
  nodes: Array<React.RefObject<HTMLDivElement>>;
}

const BackgroundColumns = (props: IProps) => {
  const { position, nodes } = props;

  return (
    <Fragment>
      <div
        className={
          position === 1
            ? style.background_column_left
            : position === 2
            ? style.background_column_right
            : ''
        }
      >
        <div ref={nodes[0]}></div>
        <div ref={nodes[1]}></div>
        <div ref={nodes[2]}></div>
        <div ref={nodes[3]}></div>
      </div>
    </Fragment>
  );
};

export default BackgroundColumns;
