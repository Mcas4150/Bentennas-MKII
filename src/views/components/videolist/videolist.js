import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchVideos, invalidateYoutube } from '../../../core/actions'
import { connect } from 'react-redux'
import classNames from 'classnames'
import LoadingIndicator from '../loading-indicator/loading-indicator';
import "./videolist.css"



class Videolist extends Component {
    static propTypes = {
        Youtube: PropTypes.string.isRequired,
        videos: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { dispatch, Youtube } = this.props
        dispatch(fetchVideos(Youtube))
      }
      
    render() {

       const videolistClassName = classNames('videolist')
       const videocardClassName = classNames('videocard')

        return (
        <div className={videolistClassName}>
            {this.props.videos.map((video, i) => 
                <div key={i} className={videocardClassName}>
                    <a href="/">
                        <div className='videocard__image--border'> 
                            <img class="videocard__image--url" src={video.snippet.thumbnails.high.url}/>   
                        </div>
                        <div className="videocard__name">
                            <div>{video.snippet.title}</div>
                        </div>
                    </a>
                </div>
            )}
        </div>
        )
   }
}

function mapStateToProps(state) {
    const { Youtube, videosByYoutube } = state
    const {
      items: videos
    } = videosByYoutube[Youtube] || {
      items: []
    }
   
    return {
      Youtube,
      videos
    }
  }
   
  export default connect(
    mapStateToProps,
   
    )(Videolist)


