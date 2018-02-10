import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import store from '../configureStore'
import history from '../history';

import './Root.css';

import ContactListPage from './ContactListPage/ContactListPage';
import ContactAddPage from './ContactAddPage/ContactAddPage';
import ContactEditPage from './ContactEditPage/ContactEditPage';
import NotificationBar from './NotificationBar/NotificationBar';
import Header from './Header/Header';


const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NotificationBar/>
        <Header/>
        <main className="container">
          <Switch>
            <Route path="/contacts" component={ContactListPage}/>
            <Route path="/add-contact" component={ContactAddPage}/>
            <Route path="/edit-contact" component={ContactEditPage}/>
            <Redirect to="/contacts"/>
          </Switch>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;