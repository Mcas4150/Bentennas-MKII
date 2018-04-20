import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Stream from '../../components/eventlist'

export default class EventsPage extends Component {
  render() {
    return (
      <div> 
        <Stream/> 
      </div>
    )
  }
}
