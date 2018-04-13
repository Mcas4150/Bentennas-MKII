import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchPosts,
  invalidateMixcloud,
  loadPlayer
} from '../../core/actions'
import Posts from '../components/Posts'
import ReactPlayer from 'react-player'
 
class MixesPage extends Component {

 
  componentDidMount() {
    const { dispatch, Mixcloud } = this.props
    dispatch(fetchPosts(Mixcloud))
  }


  render() {
    const { Mixcloud, posts, loadPlayer } = this.props
    return (
      <div>
        <ReactPlayer
            url="https://www.mixcloud.com/NTSRadio/shamos-11th-april-2018/"
            width="100%"
            height="60px"
            controls="true"
        />
        
          <div >
                <ul>
                    {posts.map((mix, i) => 
                        <li key={i} onClick={loadPlayer}>
                                <img src={mix.pictures.large}/>
                                <p>{mix.name}</p>
                        </li>)
                    }
                </ul>
          </div>
      </div>
    )
  }
}
 
MixesPage.propTypes = {
  Mixcloud: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loadPlayer: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  const { Mixcloud, postsByMixcloud } = state
  const {
    loadPlayer,
    items: posts
  } = postsByMixcloud[Mixcloud] || {
    items: []
  }
 
  return {
    Mixcloud,
    posts,
    loadPlayer
  }
}
 
export default connect(mapStateToProps)(MixesPage)