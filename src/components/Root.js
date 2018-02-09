import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import store from '../configureStore'
import history from '../history';

import ContactListPage from './ContactListPage/ContactListPage';
import ContactAddPage from './ContactAddPage/ContactAddPage';
import ContactEditPage from './ContactEditPage/ContactEditPage';
import Header from './Header/Header';

import '../styles/core/reset.css';
import '../styles/layouts/layout.css';
import '../styles/modules/buttons.css';
import '../styles/modules/typography.css';
import '../styles/modules/form.css';
import '../styles/modules/navigation.css';
import '../styles/modules/spinner.css';
import '../styles/modules/error-message.css';
import '../styles/modules/profile.css';
import '../styles/pages/App.css';
import '../styles/pages/ContactForm.css';
import '../styles/pages/ContactListPage.css';


const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
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