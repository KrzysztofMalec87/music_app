import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import SearchList from './components/search-list/SearchList';

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <Form />
    <SearchList />
    <Footer />
  </Provider>
);

export default App;
