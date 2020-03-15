import React from 'react';

interface PlayListItemInterface {
  data: any;
  index: any;
}

const PlaylistItem: React.FC<PlayListItemInterface> = ({ data, index }: PlayListItemInterface) => {
  const { videoId, title, imageUrl } = data.videoDetails;

  return (
    <div className="c-playlist-item">
      <img className="c-playlist-item__img" src={imageUrl} alt={title} />
      <button className="c-playlist-item__button c-playlist-item__button--play"></button>
      <button className="c-playlist-item__button"></button>
      {title}
    </div>
  );
};

export default PlaylistItem;
