import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class Posts extends Component {
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
 
Posts.propTypes = {
  posts: PropTypes.array.isRequired
}