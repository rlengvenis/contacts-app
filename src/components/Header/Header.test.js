import React from 'react';
import {render} from 'enzyme';
import {Router} from 'react-router-dom';

import history from '../../history';

import {Header} from './Header';


describe('Header', () => {
  it('should render sign in and sign up when not authenticated', () => {
    const wrapper = render(
      <Router history={history}>
        <Header authenticated={false}/>
      </Router>
    );

    expect(wrapper.text().includes('Sign up')).to.be.true;
    expect(wrapper.text().includes('Sign in')).to.be.true;
  });

  it('should render sign out when authenticated', () => {
    const wrapper = render(
      <Router history={history}>
        <Header authenticated={true}/>
      </Router>
    );

    expect(wrapper.text().includes('Sign out')).to.be.true;
  });
});
