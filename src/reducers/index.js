const songsReducer = () => {
  return [
    { title: 'Almost Famous', duration: '4:29' },
    { title: 'Californication', duration: '5:30' },
    { title: 'California Love', duration: '4:45' },
    { title: 'Unforgettable', duration: '3:54' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
