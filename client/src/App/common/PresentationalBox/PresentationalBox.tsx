import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {
  pageOut,
  hover,
  endHover
} from '../../animations/presentational_box_transition';
import { fadeInDown } from '../../animations/fades';

import Pic from '../../assets/portfolio-preview.png';

import style from '../../styles/main.module.scss';

interface IProps {
  index: number;
}

interface IState {
  redirect: Boolean;
}

export default class PresentationalBox extends Component<IProps, IState> {
  transitionRef = React.createRef<HTMLDivElement>();
  transitionRefMobile = React.createRef<HTMLDivElement>();
  boxRef = React.createRef<HTMLDivElement>();
  picRef = React.createRef<HTMLDivElement>();

  constructor(props: IProps) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    const node = this.boxRef.current;
    const indexTranslate = 0.7;

    fadeInDown(node, this.props.index * indexTranslate);
  }

  mouseEnter = () => {
    const hoverNode = this.transitionRef.current;
    const picNode = this.picRef.current;
    hover(hoverNode, picNode);
  };

  mouseLeave = () => {
    const hoverNode = this.transitionRef.current;
    const picNode = this.picRef.current;
    endHover(hoverNode, picNode);
  };

  handleClick = () => {
    const hoverNode = this.transitionRef.current;
    const hoverNodeMobile = this.transitionRefMobile.current;
    const boxNode = this.boxRef.current;
    const picNode = this.picRef.current;

    pageOut(hoverNode, boxNode, hoverNodeMobile, picNode, () =>
      this.handleRedirect()
    );
  };

  handleRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const { redirect } = this.state;

    return (
      <div
        ref={this.boxRef}
        className={style.presentational_box}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.handleClick}
      >
        {redirect && <Redirect push to="/work/123testoweid" />}
        <div ref={this.transitionRef} className={style.hover_box}>
          <h2>my personal portfolio website</h2>
          <p>click for more info</p>
          <h1>portfolio</h1>
        </div>
        <div ref={this.picRef} className={style.background}>
          <img src={Pic} alt="" />
        </div>
        <div
          ref={this.transitionRefMobile}
          className={style.hover_box_mobile}
        />
      </div>
    );
  }
}
