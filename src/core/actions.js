import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALID_MIXCLOUD = 'INVALIDATE_MIXCLOUD'
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const INVALID_YOUTUBE = 'INVALIDATE_YOUTUBE'
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
    return fetch(`https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=60`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(mixcloud, json)))
  }
}


export function invalidateYoutube(youtube) {
  return {
    type: INVALID_YOUTUBE,
    youtube
  }
}
 
function requestVideos(youtube) {
  return {
    type: REQUEST_VIDEOS,
    youtube
  }
}
 
function receiveVideos(youtube, json) {
  return {
    type: RECEIVE_VIDEOS,
    youtube,
    videos: json.items,
    receivedAt: Date.now()
  }
}
 
export function fetchVideos(youtube) {
  return dispatch => {
    dispatch(requestVideos(youtube))
    return fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCmqKuYoZCI7D6FQzDv5nKNw&maxResults=25&key=AIzaSyBQ8FSEJZuoR2AFyoXJ1EyFCspH89Ckxws`)
      .then(response => response.json())
      .then(json => dispatch(receiveVideos(youtube, json)))
  }
}