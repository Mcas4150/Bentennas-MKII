import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Mixlist from '../../components/mixlist'
import '../../styles/styles.css'

export default class MixesPage extends Component {
  render() {
    return (
      <div>
        <Mixlist/>      
      </div>
    )
  }
}
