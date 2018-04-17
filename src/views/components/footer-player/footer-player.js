import React, { Component } from "react";
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { loadPlayer } from '../../../core/actions'
import { connect } from 'react-redux'
import './footer-player.css';




class FooterPlayer extends Component {
    static propTypes = {
        MixUrl: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { dispatch, MixUrl } = this.props
        dispatch(loadPlayer(MixUrl))
      }
      


  render() {
    return (
        <div className="footer__player">
            <ReactPlayer
              url="https://www.mixcloud.com/NTSRadio/shamos-11th-april-2018/"
              width="100%"
              height="60px"
              controls="true"
          />
      </div>
     
    );
  }
}


function mapStateToProps(state) {
    const { MixUrl } = state
    return {
      MixUrl
    }
  }
   
  export default connect( mapStateToProps )(FooterPlayer)


