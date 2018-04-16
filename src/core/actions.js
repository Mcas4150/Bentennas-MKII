import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALID_MIXCLOUD = 'INVALIDATE_MIXCLOUD'
export const LOAD_PLAYER = "LOAD_PLAYER"


const loadToPlayer = mixurl => ({
  type: LOAD_PLAYER,
  mixurl
})

export const loadPlayer = mixurl => (dispatch, getState) => {
    dispatch(loadToPlayer(mixurl))
  
}


// export const loadPlayer = (url) => {
//   return dispatch => {
//     dispatch({
//       type: LOAD_PLAYER,
//       url
//     });
//   };
// };

export function invalidateMixcloud(mixcloud) {
  return {
    type: INVALID_MIXCLOUD,
    mixcloud
  }
}
 
function requestPosts(mixcloud) {
  return {
    type: REQUEST_POSTS,
    mixcloud
  }
}
 
function receivePosts(mixcloud, json) {
  return {
    type: RECEIVE_POSTS,
    mixcloud,
    posts: json.data,
    receivedAt: Date.now()
  }
}
 





export function fetchPosts(mixcloud) {
  return dispatch => {
    dispatch(requestPosts(mixcloud))
    return fetch(`https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=20`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(mixcloud, json)))
  }
}