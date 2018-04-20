import { TRACKS_SET } from './actions'




export default function(state = [], action) {
  switch (action.type) {
    case TRACKS_SET:
      return setTracks(state, action);
  }
  return state;
}

function setTracks(state, action) {
  const { tracks } = action;
  return [ ...state, ...tracks ];
}