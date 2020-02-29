import { Reducer } from 'redux';

import { AppStateinterface } from '../interfaces';

const initialState: AppStateinterface = {
  sample: '',
};

const rootReducer: Reducer = (state = initialState, action) => state;

export default rootReducer;
