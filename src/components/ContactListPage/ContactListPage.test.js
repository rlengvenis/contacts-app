import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {ContactListPage} from './ContactListPage';


describe('ContactListPage', () => {
  let props;

  beforeEach(() => {
    props = {
      contactListActions: {
        getContactList: sinon.spy()
      },
      notificationActions: {
        clearMessages: sinon.spy()
      },
      contactList: [{
        id: 'Id_1',
      }, {
        id: 'Id_1',
      }]

    };
  });

  it('should call fetch contacts when component is mounted ', () => {
    const wrapper = shallow(<ContactListPage {...props}/>);

    expect(props.contactListActions.getContactList.calledOnce).to.be.true;
  });

  it('should call fetch when filter input is changed', () => {
    const wrapper = shallow(<ContactListPage {...props}/>);
    wrapper.find('input').simulate('change', {target: {value: 'x'}});

    expect(props.contactListActions.getContactList.calledTwice).to.be.true;
  });

  it('should clear messages is unMounted', () => {
    const wrapper = shallow(<ContactListPage {...props}/>);
    wrapper.unmount();

    expect(props.notificationActions.clearMessages.calledOnce).to.be.true;
  });

  it('should render profiles provided', () => {
    const wrapper = shallow(<ContactListPage {...props}/>);
    expect(wrapper.find('ContactProfile')).to.have.length(2);
  })
});
