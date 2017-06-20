import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {hashHistory, Router, Route, Redirect} from 'react-router';

import Layout from './layout/layout'

import LoginPage from './pages/login'
import DashboardPage from './pages/dashboard'


const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/login" />
    <Route path="/" component={Layout}>
      <Route path="login" component={LoginPage} />
      <Route path="dashboard" component={DashboardPage} />
    </Route>
  </Router>
)


jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('login-box'),
    function() {
      console.timeEnd('react-app')
    }
  );
})
