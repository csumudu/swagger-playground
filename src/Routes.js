import  React from 'react';
import DashboardPage from './dashboard/pages/DashboardPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ManagePage from './manage/pages/ManagePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <DashboardPage />
      </Route>
      <Route exact path="/manage">
        <ManagePage />
      </Route>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  );
};

export default Routes;
