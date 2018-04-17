import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchPosts, invalidateMixcloud } from '../../../core/actions'
import { connect } from 'react-redux'
import classNames from 'classnames'
import MixCard from '../mix-card'
import "./mixlist.css"
 
 class Mixlist extends Component {
    static propTypes = {
        Mixcloud: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { dispatch, Mixcloud } = this.props
        dispatch(fetchPosts(Mixcloud))
      }
      
    render() {

       const mixlistClassName = classNames('mixlist')
       const mixcardClassName = classNames('mixcard')

        return (
        <div className={mixlistClassName}>
            {this.props.posts.map((mix, i) => 
                <div key={i} className={mixcardClassName}>
                    <a href={mix.url}>
                        <div className='mixcard__image--border'> 
                            <img class="mixcard__image--url" src={mix.pictures.large}/>   
                        </div>
                        <div className="mixcard__name">
                            <p>{mix.name}</p>
                        </div>
                    </a>
                </div>
            )}
        </div>
        )
   }
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


