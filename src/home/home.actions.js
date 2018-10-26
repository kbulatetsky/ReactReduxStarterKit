import * as types from './home.actionTypes';

export function testAction1() {
  return { type: types.TEST_ACTION_1 };
}

export function testAction2() {
  return { type: types.TEST_ACTION_2 };
}

export function testAction3() {
  return { type: types.TEST_ACTION_3 };
}

export function testAction3Thunk() {
  return (dispatch) => {
    dispatch(testAction3());
  };
}
