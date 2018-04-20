import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../../../core/actions";
import Stream from './eventlist';

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  }
}

function mapDispatchToProps(dispatch) {
    return {
      onFetch: bindActionCreators(actions.fetchStream, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Stream);