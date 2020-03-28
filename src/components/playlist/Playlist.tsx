import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppStateinterface } from '../../interfaces/';
import { getStoragePlaylist } from '../../common/functions';
import { setSessionPlaylist } from '../../actions/';

import PlaylistButton from './playlist-button/PlaylistButton';
import PlaylistItem from './playlist-item/PlaylistItem';

const Playlist: React.FC = () => {
  const ACTIVE_CLASS = ' c-playlist--visible';
  const playlistInSession = getStoragePlaylist();
  const dispatch = useDispatch();
  const [activeClass, toogleActiveClass] = useState('');
  const playlistItems = useSelector<AppStateinterface, object[]>(state => state.playlist);
  const playlistItemsCount = playlistItems.length;

  const handleAddActiveClass = (): void => toogleActiveClass(ACTIVE_CLASS);

  const handleRemoveActiveClass = (): void => toogleActiveClass('');

  useEffect(() => {
    if (playlistItemsCount === 0 && playlistInSession.length) {
      dispatch(setSessionPlaylist(playlistInSession));
    }
  });

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
