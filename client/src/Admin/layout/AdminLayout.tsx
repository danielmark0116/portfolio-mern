import React from 'react';
import LogoutBox from '../features/LogoutBox/LogoutBox';

interface IProps {
  children: React.ReactChild;
}

const AdminLayout = (props: IProps) => {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10
        }}
      >
        <div>navbar</div>
        <div>
          <LogoutBox></LogoutBox>
        </div>
      </nav>
      <br />
      <br />
      {props.children}
      <br />
      <br />
      footer
    </div>
  );
};

export default AdminLayout;
