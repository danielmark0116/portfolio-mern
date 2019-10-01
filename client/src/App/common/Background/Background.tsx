import * as React from 'react';

import BackgroundColumns from '../BackgroundColumns/BackgroundColumns';

import style from '../../styles/main.module.scss';

import { backgroundMoveAnimation } from '../../animations/background';
import { backgroundRedirect } from '../../animations/background_redirect';
import { animateBgColumns } from '../../animations/background_columns';

interface IProps {
  children: React.ReactNode;
  animate: Boolean;
  callback: Function;
}

export default class Background extends React.Component<IProps, {}> {
  nodeRef = React.createRef<any>();
  col1Ref = React.createRef<any>();
  col2Ref = React.createRef<any>();
  col3Ref = React.createRef<any>();
  col4Ref = React.createRef<any>();
  col5Ref = React.createRef<any>();
  col6Ref = React.createRef<any>();
  col7Ref = React.createRef<any>();
  col8Ref = React.createRef<any>();

  mouseMove = (e: React.MouseEvent<any>) => {
    const node = this.nodeRef.current;
    const { animate } = this.props; // value is true when home menu link is clicked

    if (!animate) {
      backgroundMoveAnimation(e, node);

      animateBgColumns(
        [
          this.col1Ref.current,
          this.col2Ref.current,
          this.col3Ref.current,
          this.col4Ref.current,
          this.col5Ref.current,
          this.col6Ref.current,
          this.col7Ref.current,
          this.col8Ref.current
        ],
        e
      );
    }
  };

  componentDidUpdate() {
    const { animate, callback } = this.props;
    const node = this.nodeRef.current;

    animate && backgroundRedirect(node, () => callback());
  }

  render() {
    const { children } = this.props;

    return (
      <main
        onMouseMove={this.mouseMove}
        ref={this.nodeRef}
        className={style.main_container}
      >
        <BackgroundColumns
          nodes={[this.col1Ref, this.col2Ref, this.col3Ref, this.col4Ref]}
          position={1}
        />
        <BackgroundColumns
          nodes={[this.col5Ref, this.col6Ref, this.col7Ref, this.col8Ref]}
          position={2}
        />
        <div>{children}</div>
      </main>
    );
  }
}
