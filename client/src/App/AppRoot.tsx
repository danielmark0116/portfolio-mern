import React, { Component } from 'react';

interface IProps {
  children: React.ReactChild;
}

export default class AppRoot extends Component<IProps, {}> {
  render() {
    return <div>{this.props.children}</div>;
  }
}
