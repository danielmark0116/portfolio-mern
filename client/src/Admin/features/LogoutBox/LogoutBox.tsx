import React, { useState, Fragment } from 'react';
import { GoogleLogout } from 'react-google-login';
import Cookie from 'js-cookie';
import { Redirect } from 'react-router-dom';

const LogoutBox = (props: any) => {
  const [redirect, handleRedirect] = useState(false);

  return (
    <Fragment>
      <GoogleLogout
        clientId="181363774029-vd1cnl65r2cjrcghd348uds0eg9dksqc.apps.googleusercontent.com"
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
