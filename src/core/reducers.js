import { combineReducers } from 'redux'
import {
  INVALID_MIXCLOUD,
  REQUEST_POSTS,
  RECEIVE_POSTS
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

const rootReducer = combineReducers({
  postsByMixcloud
})
 
export default rootReducer