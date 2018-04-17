import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Mixlist from '../../components/mixlist'
import MixCarousel from '../../components/carousel/carousel'
import '../../styles/styles.css'
import './mixes-page.css'

export default class MixesPage extends Component {
  render() {
    return (
      <div className="mixes-page">
        <MixCarousel/>
        <Mixlist/>      
      </div>
    )
  }
}
