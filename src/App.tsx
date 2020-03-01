import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <Form />
    <Footer />
  </Provider>
);

export default App;
