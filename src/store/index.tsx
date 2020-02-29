import { createStore } from 'redux';
import rootReducer from '../reducers';

const store: React.FC = createStore(rootReducer);

export default store;
