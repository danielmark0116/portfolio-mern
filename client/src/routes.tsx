import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppRoot from './App/AppRoot';

import AdminRoot from './Admin/AdminRoot';
import AdminHome from './Admin/pages/Home';
import AdminProjects from './Admin/pages/Projects';
import AdminProjectForm from './Admin/features/ProjectForm/ProjectFormContainer';

import PageLayout from './App/layout/PageLayout';
import Home from './App/homePage/Home';
import Contact from './App/contactPage/Contact';
import Work from './App/workPage/Work';
import Work2 from './App/workPage/Work2';
import About from './App/aboutPage/About';
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
          <Work2></Work2>
        </Route>
        <Route exact path="/work">
          <Work></Work>
        </Route>
        <Route exact path="/image">
          <ImageTest></ImageTest>
        </Route>
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
  return <h1>page not found</h1>;
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
