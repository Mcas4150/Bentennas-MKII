import { combineReducers } from 'redux'
import {
  SELECT_PAGINATION,
  INVALIDATE_PAGINATION,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './actions'
 
function selectedPagination(state = 20 , action) {
  switch (action.type) {
    case SELECT_PAGINATION:
      return action.pagination
    default:
      return state
  }
}
 
function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_PAGINATION:
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
 
function postsByPagination(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_PAGINATION:
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
  postsByPagination,
  selectedPagination
})
 
export default rootReducer