import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PlayListItemInterface, AppStateinterface } from '../../../interfaces/';
import { removeFromPlaylist, setCurrentPlayed } from '../../../actions';

const PlaylistItem: React.FC<PlayListItemInterface> = ({ data, index }: PlayListItemInterface) => {
  const { title, imageUrl } = data.videoDetails;
  const dispatch = useDispatch();
  const playlistItems = useSelector<AppStateinterface, object[]>(state => state.playlist);

  const handleRemoveFromPlaylist = (): void => {
    const newPlaylist: object[] = [];

    playlistItems.map((item, i): void => {
      if (i !== index) {
        newPlaylist.push(item);
      }
    });

    dispatch(removeFromPlaylist(newPlaylist));
  };

  const handleSetCurrentPlayed = (): any => dispatch(setCurrentPlayed(index));

  return (
    <div className="c-playlist-item">
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
