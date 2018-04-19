import { combineReducers } from 'redux'
import { mixesActions } from './actions'
import initialState from './initialState'
 

export function mixes(
    state = {
      isFetching: false,
      didInvalidate: false,
      items: []
    },
    action
  ) {
    switch (action.type) {
      case mixesActions.INVALID_MIXCLOUD:
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case mixesActions.REQUEST_MIXES:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case mixesActions.RECEIVE_MIXES:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          items: action.mixes,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }
   
export function mixesReducer(state = initialState.mixes, action) {
    switch (action.type) {
      case mixesActions.INVALID_MIXCLOUD:
      case mixesActions.RECEIVE_MIXES:
      case mixesActions.REQUEST_MIXES:
        return Object.assign({}, state, {
          [action.pagination]: mixes(state[action.pagination], action)
        })
      default:
        return state
    }
  }
  
  