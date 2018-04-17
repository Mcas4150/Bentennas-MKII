import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Videolist from '../../components/videolist'
import "./videos-page.css"

export default class VideosPage extends Component {
  render() {
    return (
      <div className="videos-page">  
          <Videolist/>
      </div>
    )
  }
}
