import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import SearchList from './components/search-list/SearchList';
import Playlist from './components/playlist/Playlist';
import YoutubeBlock from './components/youtube-block/YoutubeBlock';

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <Form />
    <YoutubeBlock />
    <SearchList />
    <Playlist />
    <Footer />
  </Provider>
);

export default App;
