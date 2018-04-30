import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './eventlist.css';
import { fetchStream } from "../../../core/actions"
import ReactPlayer from 'react-player';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../../../core/actions";



class Stream extends Component  {
    // static propTypes = {
    //     Mixcloud: PropTypes.string.isRequired,
    //     dispatch: PropTypes.func.isRequired
    // };
  
    // componentDidMount() {
    //     const { dispatch, Mixcloud } = this.props
    //     dispatch(fetchStream(Mixcloud))
    //   }

    render () {
        const { track = [], tracks = [], trackReducer = [], activeTrack, onFetch, onPlay} = this.props
    return (
    <div>
        {/* <div>
            <button onClick={onFetch} className="bigbutton" type="button">Load</button>
        </div> */}
        <br/>
        <div>
    
        {
            tracks.map((track, key) => {
            return ( <div className="track" key={key}>
                        {track.name}
                        <button type="button" onClick= {() => onPlay(track)}> Play</button>
                    </div>
            );
            })
        }
        </div>
       
    </div>

    // <ReactPlayer  url={}
    // width="100%"
    // height="60px"
    // controls="true" />
        );
    }
}
function mapStateToProps(state) {
    const { tracks, activeTrack } = state;
    
    return {
      tracks,
      activeTrack
    }
  }
  
  function mapDispatchToProps(dispatch) {
      return {
        onFetch: bindActionCreators(actions.fetchStream, dispatch),
        onPlay: bindActionCreators(actions.playTrack, dispatch),
      };
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Stream);
