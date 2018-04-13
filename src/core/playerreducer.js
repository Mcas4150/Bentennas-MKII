import { combineReducers } from 'redux'
import { LOAD_PLAYER } from './actions'


const initialState = {
    url: 'https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/',
    playing: false,
    hidden: true
  }; 


  export default (state = initialState, action) => {
    switch (action.type) {
      case LOAD_PLAYER:
        return {
            ...state, 
            url: action.url,
            playing: true,
            hidden: false
        };
    }
  };