import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import Register from './components/login/register';
import CountingParent from './components/ex';
import TweetTest from './components/tweet';
import Navbar from './components/navbar/navbar.js';
import FileList from './components/filelist';
import ShoppingSite from './components/shoppingsite';

import {Provider} from 'react-redux';
import store from './services/shoppingsite/store' 

const App = () => {
  return (
    <div>
            <Navbar/>
            <div className='main_body'>
              <Route exact path='/' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/ex' component={CountingParent} />
              <Route exact path='/tweet' component={TweetTest} />
              <Route path='/list' component={FileList} />
              <Provider store={store}>
                <Route path='/shopsite' component={ShoppingSite} />
              </Provider>
            </div>
     </div>
   );
  }

   export default App;