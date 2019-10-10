import React from 'react';
import Navbar from '../features/Navbar/Navbar';
import PageContainer from '../common/PageContainer/PageContainer';

interface IProps {
  children: React.ReactChild;
}

const links = [
  {
    path: '/',
    title: 'home'
  },
  {
    path: '/admin',
    title: 'generals'
  },
  {
    path: '/admin/projects',
    title: 'projects'
  }
];

const AdminLayout = (props: IProps) => {
  return (
    <div>
      <Navbar links={links} />
      <PageContainer>{props.children}</PageContainer>
    </div>
  );
};

export default AdminLayout;
