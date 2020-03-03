export const changeQueryResults = (queryResults: object[]): object => ({
  type: 'UPDATE_QUERY_RESUTS',
  payload: queryResults,
});

export const addToPlaylist = (playlistItem: object): object => ({
  type: 'ADD_TO_PLAYLIST',
  payload: playlistItem,
});
