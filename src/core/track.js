import { TRACKS_SET, TRACK_PLAY } from './actions'


const initState = {
    tracks: [],
    activeTrack: null
}

export function trackReducer (state = [], action) {
  switch (action.type) {
    case TRACKS_SET:
      return setTracks(state, action);
    case TRACK_PLAY:
        return setPlay(state, action);
  }
  return state;
}

function setTracks(state, action) {
  const { tracks } = action;
  return [ ...state, ...tracks ];
}

function setPlay(state, action){
    const {track } = action;
    return { ...state, activeTrack: track};
}