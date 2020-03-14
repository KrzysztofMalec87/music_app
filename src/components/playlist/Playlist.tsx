import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AppStateinterface } from '../../interfaces/';

import PlaylistButton from './playlist-button/PlaylistButton';

const Playlist: React.FC = () => {
  const ACTIVE_CLASS = ' c-playlist--visible';
  const [activeClass, toogleActiveClass] = useState('');
  const playlistItems = useSelector<AppStateinterface, object[]>(state => state.playlist);
  const playlistItemsCount = playlistItems.length;

  const handleAddActiveClass = (): void => toogleActiveClass(ACTIVE_CLASS);

  const handleRemoveActiveClass = (): void => toogleActiveClass('');

  return (
    <>
      <div className={`c-playlist${activeClass}`}>
        <button className="c-playlist__close" onClick={handleRemoveActiveClass}></button>
      </div>
      <PlaylistButton count={playlistItemsCount} triggerPlaylist={handleAddActiveClass} />
    </>
  );
};

export default Playlist;
