import React from 'react'
import Icon from './logo512.png'
import './App.less'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import loadable from 'loadable'

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/others/404.js'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/others/500.js'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/login/login.js'))

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact render={ () => <Redirect to='/index' /> } />
      <Route path='/500' component={ View500 } />
      <Route path='/login' component={ Login } />
      <Route path='/404' component={ View404 } />
      <Route component={ DefaultLayout } />
    </Switch>
  </Router>
)

export default App
