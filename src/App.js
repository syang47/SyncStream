import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import {Player as VideoPlayer} from './components/video/video';
import Upload from './components/upload/upload';

import Login from './components/Auth/Login'
import useToken from './components/App/useToken'

function App() {

  // const {token, setToken} = useToken();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/preferences' exact component={Preferences}/>
          <Route path='/video' exact component={VideoPlayer}/>
          <Route path='/upload' exact component={Upload}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
