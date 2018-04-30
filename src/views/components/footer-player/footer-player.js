import React, { Component } from "react";
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import {playerReducer} from '../../../core/reducers'
import { bindActionCreators } from 'redux';
import { loadPlayer } from '../../../core/actions'
import { connect } from 'react-redux'
import './footer-player.css';




const  FooterPlayer = props => (
    
    
    // static propTypes = {
    //     MixUrl: PropTypes.string.isRequired,
    //     newurl: PropTypes.string.isRequired,
    //     dispatch: PropTypes.func.isRequired
    // };

    // componentDidMount() {
    //     const { dispatch, MixUrl } = this.props
    //     dispatch(loadPlayer(MixUrl))
    //   }
      


//   render() {
//     const { newurl } = this.props
//     return (
       <div> 
        <div onClick={props.playerReducer}></div>
        <div className="footer__player">
            <ReactPlayer
              url=""
              width="100%"
              height="60px"
              controls="true"
          />
         </div>
        </div>
//     );
//   }
)


function mapStateToProps(state) {
    const { MixUrl, playerReducer } = state
    const { mixUrl: newurl } = playerReducer[MixUrl] || { mixUrl: "" }
    return {
      MixUrl,
      newurl
    }
  }
   
  const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      playerReducer
    },
    dispatch
  );

  export default connect( mapStateToProps, mapDispatchToProps )(FooterPlayer)


