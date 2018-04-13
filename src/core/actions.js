import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_PAGINATION = 'SELECT_PAGINATION'
export const INVALIDATE_PAGINATION = 'INVALIDATE_PAGINATION'
 
export function selectPagination(pagination) {
  return {
    type: SELECT_PAGINATION,
    pagination
  }
}
 
export function invalidatePagination(pagination) {
  return {
    type: INVALIDATE_PAGINATION,
    pagination
  }
}
 
function requestPosts(pagination) {
  return {
    type: REQUEST_POSTS,
    pagination
  }
}
 
function receivePosts(pagination, json) {
  return {
    type: RECEIVE_POSTS,
    pagination,
    posts: json.data,
    receivedAt: Date.now()
  }
}
 
function fetchPosts(pagination) {
  return dispatch => {
    dispatch(requestPosts(pagination))
    return fetch(`https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=${pagination}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(pagination, json)))
  }
}

function shouldFetchPosts(state, pagination) {
  const posts = state.postsByPagination[pagination]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}
 
export function fetchPostsIfNeeded(pagination) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), pagination)) {
      return dispatch(fetchPosts(pagination))
    }
  }
}
