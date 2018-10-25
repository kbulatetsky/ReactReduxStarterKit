import { combineReducers } from 'redux';

import homeReducer from '../home/home.reducer';
import page1Reducer from '../page1/page1.reducer';
import page2Reducer from '../page2/page2.reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  page1: page1Reducer,
  page2: page2Reducer,
});

export default rootReducer;
