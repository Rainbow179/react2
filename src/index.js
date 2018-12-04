
import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter,Switch,Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux/store';



import Login from './components/login';
import Register from './components/register';
import Main from './components/main';



ReactDom.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>),
  document.getElementById('app')
)