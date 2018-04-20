import { combineReducers } from 'redux'
import {
  INVALID_YOUTUBE,
  REQUEST_VIDEOS,
  RECEIVE_VIDEOS,
  LOAD_PLAYER,
  PLAY_MIX
} from './actions'
import { mixesReducer } from './mixes'
import track from './track';
 


function videos(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALID_YOUTUBE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_VIDEOS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.videos,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
 
function videosByYoutube(state = {}, action) {
  switch (action.type) {
    case INVALID_YOUTUBE:
    case RECEIVE_VIDEOS:
    case REQUEST_VIDEOS:
      return Object.assign({}, state, {
        [action.pagination]: videos(state[action.pagination], action)
      })
    default:
      return state
  }
}




// function player(
//   state = {
//     url: 'https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/',
//     playing: false,
//     hidden: true
//   },
//   action
// ) {
//   switch (action.type) {
//     case REQUEST_VIDEOS:
//       return Object.assign({}, state, {
//         isFetching: true,
//         didInvalidate: false
//       })
//     case RECEIVE_VIDEOS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         didInvalidate: false,
//         items: action.videos,
//         lastUpdated: action.receivedAt
//       })
//     default:
//       return state
//   }
// }
//  
// function videosByYoutube(state = {}, action) {
//   switch (action.type) {
//     case INVALID_YOUTUBE:
//     case RECEIVE_VIDEOS:
//     case REQUEST_VIDEOS:
//       return Object.assign({}, state, {
//         [action.pagination]: videos(state[action.pagination], action)
//       })
//     default:
//       return state
//   }
// }
















const initialState = {
  url: 'https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/',
  playing: true,
  hidden: false
}; 


export function playerReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_PLAYER:
      return {
          ...state, 
          newurl: state.url,
          playing: true,
          hidden: false
      };
    case PLAY_MIX:
        return setPlay(state, action)
      };
      return state;
  }


function setPlay(state, action){
  const { newUrl } = action;
  return {...state, url: newUrl };
}




const rootReducer = combineReducers({
  mixesReducer,
  playerReducer,
  videosByYoutube,
  track
})
 
export default rootReducer