import React, { Component } from 'react';

import ArrowBtn from '../ArrowBtn/ArrowBtn';

import { fadeInDownBounce as animation } from '../../animations/fades';
import { switchBtnBackground } from '../../animations/go_back_btn';

import style from '../../styles/main.module.scss';

interface IProps {
  action: Function;
  children: string;
}
class GoBackBtn extends Component<IProps, {}> {
  textNode = React.createRef<HTMLDivElement>();
  btnNode = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const node = this.textNode.current;

    animation(node, 1);

    window.addEventListener('scroll', () => {
      const node = this.btnNode.current;
      node && this.handleScroll(node);
    });
  }

  handleScroll = (node: any) => {
    const pageOffset = window.pageYOffset;

    switchBtnBackground(node, pageOffset);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', () => null);
  }

  render() {
    const { action, children } = this.props;

    return (
      <div
        ref={this.btnNode}
        className={style.go_back_btn_container}
        onClick={() => action()}
      >
        <div ref={this.textNode}>{children}</div>
        <div className={style.go_back_btn}>
          <ArrowBtn direction="up" />
        </div>
      </div>
    );
  }
}

export default GoBackBtn;
