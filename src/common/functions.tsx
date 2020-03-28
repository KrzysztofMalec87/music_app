import { Constants } from '../common/enums';

const addToStoragePlaylist = (item: object): void => {
  const newPlaylist = [];
  const playlistSession: any = getStoragePlaylist();

  if (playlistSession) {
    playlistSession.map((element: object) => newPlaylist.push(element));
  }

  newPlaylist.push(item);

  localStorage.setItem(Constants.SESSION_PLAYLIST_NAME, JSON.stringify(newPlaylist));
};

const setStoragePlaylist = (playlist: object[]) =>
  localStorage.setItem(Constants.SESSION_PLAYLIST_NAME, JSON.stringify(playlist));

const getStoragePlaylist = (): any => {
  const playlist = localStorage.getItem(Constants.SESSION_PLAYLIST_NAME);

  if (playlist) {
    return JSON.parse(playlist);
  }

  return;
};

export { addToStoragePlaylist, getStoragePlaylist, setStoragePlaylist };
