import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

import { AppState } from '../store';
import { selectorLoggedIn, selectorIsAdmin } from '../reducers/authReducer';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../actions/actionTypes';
import { authLoginThunk, authLoginCheckThunk } from '../actions/authActions';
import { googleResponseData } from '../types/googleResponseData';

import AdminLayout from './layout/AdminLayout';
import LoginBox from './features/LoginBox/LoginBox';
import LogoutBox from './features/LogoutBox/LogoutBox';

import './styles/main.module.scss';

interface IProps {
  children: React.ReactChild;
}

type Props = IProps & stateToProps & dispatchToProps;

class AdminRoot extends Component<Props, {}> {
  componentDidMount() {
    this.props.logInCheck();
  }

  handleResponse = (response: any) => {
    this.props.logIn(response);
  };

  render() {
    const { loggedIn, isAdmin } = this.props;

    if (!loggedIn)
      return <LoginBox handleLogin={this.handleResponse}></LoginBox>;

    if (!isAdmin)
      return (
        <Fragment>
          <p style={{ textAlign: 'center' }}>
            You don't have admin functions. <Link to="/">Go Back</Link>
            <br />
            <br />
            or
            <br />
            <br />
            <LogoutBox></LogoutBox>
          </p>
        </Fragment>
      );

    if (isAdmin && loggedIn)
      return (
        <div>
          {this.props.loggedIn ? (
            <AdminLayout>{this.props.children}</AdminLayout>
          ) : (
            <LoginBox handleLogin={this.handleResponse}></LoginBox>
          )}
        </div>
      );
  }
}

interface stateToProps {
  loggedIn: Boolean;
  isAdmin: Boolean;
}

interface dispatchToProps {
  logIn: Function;
  logInCheck: Function;
}

const mapStateToProps = (state: AppState) => ({
  loggedIn: selectorLoggedIn(state),
  isAdmin: selectorIsAdmin(state)
});

const mapDispatchToProps = (dispach: ThunkDispatch<any, any, ActionTypes>) => ({
  logIn: (data: googleResponseData) => dispach(authLoginThunk(data)),
  logInCheck: () => dispach(authLoginCheckThunk())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRoot);
