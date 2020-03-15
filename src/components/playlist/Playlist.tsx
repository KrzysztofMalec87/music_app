import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AppStateinterface } from '../../interfaces/';

import PlaylistButton from './playlist-button/PlaylistButton';
import PlaylistItem from './playlist-item/PlaylistItem';

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
        <h3 className="c-playlist__heading">Your list</h3>
        {playlistItemsCount > 0 &&
          playlistItems.map((data, index) => <PlaylistItem index={index} key={Math.random()} data={data} />)}
      </div>
      <PlaylistButton count={playlistItemsCount} triggerPlaylist={handleAddActiveClass} />
    </>
  );
};

export default Playlist;
