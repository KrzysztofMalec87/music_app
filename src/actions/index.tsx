export const changeQueryResults = (queryResults: object[]): object => ({
  type: 'UPDATE_QUERY_RESUTS',
  payload: queryResults,
});

export const addToPlaylist = (playlistItem: object): object => ({
  type: 'ADD_TO_PLAYLIST',
  payload: playlistItem,
});

export const removeFromPlaylist = (playlistItem: object): object => ({
  type: 'REMOVE_FROM_PLAYLIST',
  payload: playlistItem,
});

export const setCurrentPlayed = (index: number): object => ({
  type: 'SET_CURRENT_PLAYED',
  payload: index,
});

export const setSessionPlaylist = (array: any): object => ({
  type: 'SET_SESSION_PLAYLIST',
  payload: array,
});
