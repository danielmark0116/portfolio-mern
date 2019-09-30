import React, { Component } from 'react';

interface IProps {
  children: React.ReactChild;
}

export default class AdminRoot extends Component<IProps, {}> {
  render() {
    return <div style={{ backgroundColor: 'red' }}>{this.props.children}</div>;
  }
}
