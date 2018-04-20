import fetch from 'cross-fetch'

export const REQUEST_MIXES = 'REQUEST_MIXES'
export const RECEIVE_MIXES = 'RECEIVE_MIXES'
export const INVALID_MIXCLOUD = 'INVALIDATE_MIXCLOUD'
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const INVALID_YOUTUBE = 'INVALIDATE_YOUTUBE'
export const LOAD_PLAYER = 'LOAD_PLAYER'
export const REQUEST_PLAYER = 'REQUEST_PLAYER'
export const RECEIVE_PLAYER = 'RECEIVE_PLAYER'
export const PLAY_MIX = 'PLAY_MIX'
export const TRACKS_SET = 'TRACKS_SET';


export function loadPlayer(newUrl) {
  return {
    type: LOAD_PLAYER,
    newUrl
  }
}

export function playMix(newUrl) {
  return {
    type: PLAY_MIX,
    newUrl
  }
}


export function requestPlayer(url) {
  return {
    type: REQUEST_PLAYER,
    url
  }
}

export function receivePlayer(url) {
  return {
    type: RECEIVE_PLAYER,
    newUrl: url
  }
}


export function invalidateMixcloud(mixcloud) {
  return {
    type: INVALID_MIXCLOUD,
    mixcloud
  }
}
 
function requestMixes(mixcloud) {
  return {
    type: REQUEST_MIXES,
    mixcloud
  }
}
 
function receiveMixes(json) {
  return {
    type: RECEIVE_MIXES,
    mixes: json.data,
    receivedAt: Date.now()
  }
}
 


export function fetchMixes() {
  return dispatch => {
    dispatch(requestMixes())
    return fetch(`https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=60`)
      .then(response => response.json())
      .then(json => dispatch(receiveMixes(json)))
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

// export function changePlayer

export function fetchStream(){
  return function (dispatch) {
  fetch(`https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=60`)
      .then(response => response.json())
      .then((json) => {dispatch(setTracks(json.data)); 
      });
  };
}



export function setTracks(tracks) {
  return {
    type: TRACKS_SET,
    tracks
  };
};