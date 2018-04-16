import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchPosts, invalidateMixcloud } from '../../../core/actions'
import { connect } from 'react-redux'
 
 class Mixlist extends Component {
    
    componentDidMount() {
        const { dispatch, Mixcloud } = this.props
        dispatch(fetchPosts(Mixcloud))
      }
      
    render() {
        return (
        <ul>
            {this.props.posts.map((mix, i) => 
                <li key={i}>
                    <a href={mix.url}>
                        <img src={mix.pictures.large}/>
                        <p>{mix.name}</p>
                    </a>
                </li>)     
            }
        </ul>
        )
   }
}
 
Mixlist.propTypes = {
  Mixcloud: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { Mixcloud, postsByMixcloud } = state
    const {
      items: posts
    } = postsByMixcloud[Mixcloud] || {
      items: []
    }
   
    return {
      Mixcloud,
      posts
    }
  }
   
  export default connect(
    mapStateToProps,
   
    )(Mixlist)