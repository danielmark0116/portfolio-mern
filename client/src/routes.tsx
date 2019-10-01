import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppRoot from './App/AppRoot';
import AdminRoot from './Admin/AdminRoot';

import PageWrapper from './App/common/PageWrapper/PageWrapper';
import Home from './App/homePage/Home';
import Contact from './App/contactPage/Contact';

const AdminRoutes = () => {
  return (
    <AdminRoot>
      <Switch>
        <Route exact path="/admin">
          {<p>ADMIN home page</p>}
        </Route>
        <Route exact path="/admin/contact">
          {<p>ADMIN contact page</p>}
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
        <PageWrapper withNavbar={true}>
          <Switch>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </PageWrapper>
      </Switch>
    </AppRoot>
  );
};

const PageNotFound = () => {
  return <div>page not found</div>;
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
