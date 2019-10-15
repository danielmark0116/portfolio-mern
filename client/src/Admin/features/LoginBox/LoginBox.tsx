import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import FlexCenter from '../../common/FlexCenter/FlexCenter';

interface IProps {
  handleLogin: Function;
}

const LoginBox = (props: IProps) => {
  const { handleLogin } = props;
  return (
    <FlexCenter direction="column">
      <Fragment>
        <FlexCenter>
          <p>
            Seems like you are not logged in... <Link to="/">Go back</Link>
          </p>
        </FlexCenter>
        <FlexCenter>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
            buttonText="Login"
            onSuccess={response => handleLogin(response)}
            onFailure={() => null}
            cookiePolicy={'single_host_origin'}
          />
        </FlexCenter>
      </Fragment>
    </FlexCenter>
  );
};

export default LoginBox;
