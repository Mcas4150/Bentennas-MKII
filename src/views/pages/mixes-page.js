import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Mixlist from '../components/mixlist'
import ReactPlayer from 'react-player'
 
export default class MixesPage extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
            url="https://www.mixcloud.com/NTSRadio/shamos-11th-april-2018/"
            width="100%"
            height="60px"
            controls="true"
        />
        <Mixlist/>       
      </div>
    )
  }
}
