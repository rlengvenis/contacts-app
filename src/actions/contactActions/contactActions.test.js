import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as contactActions from './contactActions';
import * as actionTypes from '../actionTypes';
import moxios from 'moxios';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('contactActions', () => {
  describe('getContactById', () => {
    let store;

    beforeEach(() => {
      store = mockStore({});
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
      store.clearActions();
    });

    it('should call CONTACT_GET_CONTACT_SUCCESS action if contact is loaded successfully', () => {
      moxios.stubRequest('/contacts/1', {
        status: 200,
        response: {id: 'id_1'}
      });

      const expectedActions = [{
        type: actionTypes.CONTACT_GET_CONTACT_SUCCESS,
        payload: {
          id: 'id_1',
          color: '000000'
        }
      }];

      return store.dispatch(contactActions.getContactById(1))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        })
    });

    it('should call NOTIFICATIONS_SHOW_ERROR if error while fetching occurred', () => {
      moxios.stubRequest('/contacts/1', {
        status: 500,
        response: {}
      });

      const expectedActions = [{
        type: actionTypes.NOTIFICATIONS_SHOW_ERROR,
        payload: 'Error occurred while getting a contact by id'
      }];

      return store.dispatch(contactActions.getContactById(1))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        })
    });
  });
});
