export { default } from './eventlist';


// import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actions from "../../../core/actions";
// import Stream from './eventlist';

// function mapStateToProps(state) {
//   const { tracks, activeTrack } = state.track;
//   return {
//     tracks,
//     activeTrack
//   }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//       onFetch: bindActionCreators(actions.fetchStream, dispatch),
//       onPlay: bindActionCreators(actions.playTrack, dispatch),
//     };
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Stream);