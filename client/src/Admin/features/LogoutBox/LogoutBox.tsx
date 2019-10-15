import React, { useState, Fragment } from 'react';
import { GoogleLogout } from 'react-google-login';
import Cookie from 'js-cookie';
import { Redirect } from 'react-router-dom';

const LogoutBox = (props: any) => {
  const [redirect, handleRedirect] = useState(false);

  return (
    <Fragment>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
        buttonText="Logout"
        onLogoutSuccess={() => {
          Cookie.remove('googleAuthToken');
          handleRedirect(true);
        }}
      />
      {redirect && <Redirect exact to="/"></Redirect>}
    </Fragment>
  );
};

export default LogoutBox;
