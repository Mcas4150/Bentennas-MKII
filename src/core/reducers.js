import { combineReducers } from 'redux'
import {
  INVALID_MIXCLOUD,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  INVALID_YOUTUBE,
  REQUEST_VIDEOS,
  RECEIVE_VIDEOS
} from './actions'
 

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALID_MIXCLOUD:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
 
function postsByMixcloud(state = {}, action) {
  switch (action.type) {
    case INVALID_MIXCLOUD:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.pagination]: posts(state[action.pagination], action)
      })
    default:
      return state
  }
}




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


















const rootReducer = combineReducers({
  postsByMixcloud,
  videosByYoutube
})
 
export default rootReducer