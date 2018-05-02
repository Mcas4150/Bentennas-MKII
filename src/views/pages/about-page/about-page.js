import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './about-page.css'

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <div className="center">
          <h1>This site was created to share some of my favorite mixes</h1>
        </div>
      </div>
    )
  }
}
