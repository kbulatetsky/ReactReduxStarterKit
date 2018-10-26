import initialState from '../app/initialState';

import * as types from './home.actionTypes';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case types.TEST_ACTION_1:
      return 'Test Action 1';

    case types.TEST_ACTION_2:
      return 'Test Action 2';

    case types.TEST_ACTION_3:
      return 'Test Action 3';

    default:
      return state;
  }
}
