import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectPagination,
  fetchPostsIfNeeded,
  invalidatePagination
} from '../core/actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import ReactPlayer from 'react-player'
 
class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
 
  componentDidMount() {
    const { dispatch, selectedPagination } = this.props
    dispatch(fetchPostsIfNeeded(selectedPagination))
  }
 
  componentDidUpdate(prevProps) {
    if (this.props.selectedPagination !== prevProps.selectedPagination) {
      const { dispatch, selectedPagination } = this.props
      dispatch(fetchPostsIfNeeded(selectedPagination))
    }
  }
 
  handleChange(nextPagination) {
    this.props.dispatch(selectPagination(nextPagination))
    this.props.dispatch(fetchPostsIfNeeded(nextPagination))
  }
 
 

  handleRefreshClick(e) {
    e.preventDefault()
 
    const { dispatch, selectedPagination } = this.props
    dispatch(invalidatePagination(selectedPagination))
    dispatch(fetchPostsIfNeeded(selectedPagination))
  }
 
  render() {
    const { selectedPagination, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <ReactPlayer
            url="https://www.mixcloud.com/NTSRadio/shamos-11th-april-2018/"
            width="100%"
            height="60px"
            controls="true"
        />
        <Picker
          value={selectedPagination}
          onChange={this.handleChange}
          options={[ 20, 50]}
        />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
          {!isFetching &&
            <a href="#" onClick={this.handleRefreshClick}>
              Refresh
            </a>}
        </p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>}
          
      </div>
    )
  }
}
 
AsyncApp.propTypes = {
  selectedPagination: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  const { selectedPagination, postsByPagination } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByPagination[selectedPagination] || {
    isFetching: true,
    items: []
  }
 
  return {
    selectedPagination,
    posts,
    isFetching,
    lastUpdated
  }
}
 
export default connect(mapStateToProps)(AsyncApp)