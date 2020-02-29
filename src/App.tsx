import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const App: React.FC = () => <Provider store={store}>sample</Provider>;

export default App;
