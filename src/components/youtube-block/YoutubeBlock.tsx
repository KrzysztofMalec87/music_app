import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';

import { AppStateinterface } from '../../interfaces/index';
import { setCurrentPlayed } from '../../actions/index';

const YoutubeBlock: React.FC = () => {
  const [ytVideoId, changeVideoId] = useState('');
  const dispatch = useDispatch();
  const currentPlayed = useSelector<AppStateinterface, any>(state => state.currentPlayed);
  const playlistItems = useSelector<AppStateinterface, object[]>(state => state.playlist);
  const playerOptions: any = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      cc_load_policy: 0,
      iv_load_policy: 3,
      showinfo: 0,
      rel: 0,
    },
  };

  const pleyNextSong = (): void => {
    const nextSong = currentPlayed + 1;

    if (nextSong <= playlistItems.length - 1) {
      dispatch(setCurrentPlayed(nextSong));
    }
  };

  const getVideoId = (): void => {
    const playlistItem = playlistItems[currentPlayed];

    if (playlistItem === undefined) {
      return;
    }

    if (!playlistItems.length || currentPlayed === null) {
      return;
    }

    const {
      videoDetails: { videoId },
    }: { videoDetails?: any } = playlistItems[currentPlayed];

    changeVideoId(videoId);
  };

  useEffect(() => {
    getVideoId();
  });

  return (
    <div className="container">
      {ytVideoId && (
        <YouTube className="c-youtube-block" videoId={ytVideoId} onEnd={pleyNextSong} opts={playerOptions} />
      )}
    </div>
  );
};

export default YoutubeBlock;
