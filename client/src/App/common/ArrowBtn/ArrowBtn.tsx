import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import arrow from '../../assets/arrow.svg';

import { arrowBtnAnimation } from '../../animations/arrow_btn';

import style from '../../styles/main.module.scss';

interface IProps {
  direction: 'up' | 'down';
}

const rotateStyle = {
  transform: 'rotate(180deg)'
};

export default class ArrowBtn extends Component<IProps, {}> {
  arrow1Ref = React.createRef<HTMLDivElement>();
  arrow2Ref = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const node1 = this.arrow1Ref.current;
    const node2 = this.arrow2Ref.current;

    arrowBtnAnimation(node1, node2);
  }

  render() {
    const { direction } = this.props;

    return (
      <div
        className={style.arrow_btn_container}
        style={direction === 'down' ? rotateStyle : {}}
      >
        <div ref={this.arrow1Ref}>
          <SVG src={arrow}></SVG>
        </div>
        <div ref={this.arrow2Ref}>
          <SVG src={arrow}></SVG>
        </div>
      </div>
    );
  }
}
