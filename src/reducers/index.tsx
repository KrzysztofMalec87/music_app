import { Reducer } from 'redux';

import { AppStateinterface } from '../interfaces';

const initialState: AppStateinterface = {
  queryResults: [],
  playlist: [],
};

const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY_RESUTS':
      return {
        ...state,
        queryResults: action.payload,
      };
    case 'ADD_TO_PLAYLIST':
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
