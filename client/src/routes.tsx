import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppRoot from './App/AppRoot';

import AdminRoot from './Admin/AdminRoot';
import AdminHome from './Admin/pages/Home';
import AdminProjects from './Admin/pages/Projects';
import AdminProjectForm from './Admin/features/ProjectForm/ProjectFormContainer';
import AdminPosts from './Admin/pages/Posts';
import AdminPostForm from './Admin/features/PostForm/PostFormContainer';

import PageLayout from './App/layout/PageLayout';
import Home from './App/pages/homePage/Home';
import Contact from './App/pages/contactPage/Contact';
import Works from './App/pages/worksPage/Works';
import Work from './App/pages/workPage/Work';
import About from './App/pages/aboutPage/About';
import ImageTest from './App/ImageTest';

const AdminRoutes = () => {
  return (
    <AdminRoot>
      <Switch>
        <Route exact path="/admin">
          <AdminHome></AdminHome>
        </Route>
        <Route exact path="/admin/projects">
          <AdminProjects></AdminProjects>
        </Route>
        <Route exact path="/admin/projects/add">
          <AdminProjectForm edit={false}></AdminProjectForm>
        </Route>
        <Route exact path="/admin/projects/edit/:id">
          <AdminProjectForm edit={true}></AdminProjectForm>
        </Route>
        <Route exact path="/admin/posts">
          <AdminPosts></AdminPosts>
        </Route>
        <Route exact path="/admin/posts/add">
          <AdminPostForm picDisable={true} edit={false}></AdminPostForm>
        </Route>
        <Route exact path="/admin/posts/edit/:id">
          <AdminPostForm picDisable={true} edit={true}></AdminPostForm>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </AdminRoot>
  );
};

const AppRoutes = () => {
  return (
    <AppRoot>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/work/:id">
          <Work></Work>
        </Route>
        <Route exact path="/work">
          <Works></Works>
        </Route>
        <Route
          path="/blog"
          component={() => {
            window.location.href = 'https://danielgrychtol.com/blog';
            return null;
          }}
        />
        <Route exact path="/about">
          <About></About>
        </Route>
        <PageLayout withNavbar={true}>
          <Switch>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </PageLayout>
      </Switch>
    </AppRoot>
  );
};

const PageNotFound = () => {
  return <h1 style={{ marginTop: 180 }}>page not found</h1>;
};

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path={['/admin/*', '/admin']}>
          <AdminRoutes />
        </Route>
        <Route path={'/*'}>
          <AppRoutes />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;
