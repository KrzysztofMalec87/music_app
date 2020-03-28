const Youtube = {
  YOUTUBE_API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY || '',
  YOUTUBE_SEARCH_LINK: process.env.REACT_APP_YOUTUBE_SEARCH_LINK || '',
};

const Constants = {
  SESSION_PLAYLIST_NAME: 'musicAppPlaylist',
};

export { Youtube, Constants };
