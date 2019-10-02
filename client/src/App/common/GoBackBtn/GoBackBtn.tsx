import React, { Component } from 'react';

import ArrowBtn from '../ArrowBtn/ArrowBtn';

import { fadeInDownBounce as animation } from '../../animations/fades';

import style from '../../styles/main.module.scss';

interface IProps {
  action: Function;
  children: string;
}
class GoBackBtn extends Component<IProps, {}> {
  textNode = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const node = this.textNode.current;

    animation(node, 1);
  }

  render() {
    const { action, children } = this.props;

    return (
      <div className={style.go_back_btn_container} onClick={() => action()}>
        <div ref={this.textNode}>{children}</div>
        <div className={style.go_back_btn}>
          <ArrowBtn direction="up" />
        </div>
      </div>
    );
  }
}

export default GoBackBtn;
