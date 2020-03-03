import React from 'react';

import { PlaylistButtonInterface } from '../../../interfaces';

const PlaylistButton: React.FC<PlaylistButtonInterface> = ({ count, triggerPlaylist }: PlaylistButtonInterface) => (
  <button onClick={triggerPlaylist} className="btn btn-primary c-playlist-button">
    <span className="c-playlist-button__counter">{count}</span>
  </button>
);

export default PlaylistButton;
