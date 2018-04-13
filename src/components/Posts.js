import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class Posts extends Component {
    constructor(props) {
       super(props)
       this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
    }

    render() {
    return (
      <ul>
        {this.props.posts.map((mix, i) => 
            <li key={i}>
                <a href={mix.url} onClick={this.handleClick}> 
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