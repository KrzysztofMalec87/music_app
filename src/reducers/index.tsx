import { Reducer } from 'redux';

import { AppStateinterface } from '../interfaces';

const initialState: AppStateinterface = {
  queryResults: [],
};

const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY_RESUTS':
      return {
        ...state,
        queryResults: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
