import fetch from 'cross-fetch'


export const mixesActions = {
    REQUEST_MIXES: 'REQUEST_MIXES',
    RECEIVE_MIXES: 'RECEIVE_MIXES',
//     INVALID_MIXCLOUD: 'INVALIDATE_MIXCLOUD',

//    invalidateMixcloud: mixcloud => ({
//         type: mixesActions.INVALID_MIXCLOUD,
//         payload: mixcloud
//     }),
//        
    requestMixes: mixcloud => ({
        type: mixesActions.REQUEST_MIXES,
        payload: mixcloud
    }),
       
    receiveMixes: (mixcloud, json) => ({
        type: mixesActions.RECEIVE_MIXES,
        payload: {mixcloud,
          mixes: json.data,
          receivedAt: Date.now()
        }
      })
      
};

export function fetchMixes(mixcloud) {
    return dispatch => {
      dispatch(mixesActions.requestMixes(mixcloud))
      return fetch(`https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=60`)
        .then(response => response.json())
        .then(json => dispatch(mixesActions.receiveMixes(mixcloud, json)))
    }
  }
  