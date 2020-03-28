import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PlayListItemInterface, AppStateinterface } from '../../../interfaces/';
import { removeFromPlaylist, setCurrentPlayed } from '../../../actions';
import { setStoragePlaylist } from '../../../common/functions';

const PlaylistItem: React.FC<PlayListItemInterface> = ({ data, index }: PlayListItemInterface) => {
  const { title, imageUrl } = data.videoDetails;
  const dispatch = useDispatch();
  const playlistItems = useSelector<AppStateinterface, object[]>(state => state.playlist);
  const currentPlayed = useSelector<AppStateinterface, any>(state => state.currentPlayed);
  const currentActiveClass = currentPlayed === index ? ' c-playlist-item--active' : '';

  const handleRemoveFromPlaylist = (): void => {
    const newPlaylist: object[] = [];

    playlistItems.map((item, i): any => {
      if (i !== index) {
        newPlaylist.push(item);
      }
    });

    setStoragePlaylist(newPlaylist);

    dispatch(removeFromPlaylist(newPlaylist));
  };

  const handleSetCurrentPlayed = (): any => dispatch(setCurrentPlayed(index));

  return (
    <div className={`c-playlist-item ${currentActiveClass}`}>
      <img className="c-playlist-item__img" src={imageUrl} alt={title} />
      <button
        className="c-playlist-item__button c-playlist-item__button--play"
        onClick={handleSetCurrentPlayed}
      ></button>
      <button className="c-playlist-item__button" onClick={handleRemoveFromPlaylist}></button>
      {title}
    </div>
  );
};

export default PlaylistItem;
