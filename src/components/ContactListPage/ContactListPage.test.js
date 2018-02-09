import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {TaskPage} from './TaskPage';


describe('TaskPage', () => {
  let props;

  beforeEach(() => {
    props = {
      taskActions: {
        addTask: sinon.spy()
      },
      handleSubmit: sinon.spy(),
      reset: sinon.spy(),
      tasks: [{
        id: 'id1',
        taskName: 'task1',
      }, {
        id: 'id2',
        taskName: 'task2',
      }]
    };
  });

  it('should initialy render two tasks', () => {
    const wrapper = shallow(<TaskPage {...props}/>);

    expect(wrapper.find('.task-page__task-item')).to.have.length(2);
  });
});

