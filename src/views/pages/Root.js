import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../core/configureStore'
import MixesPage from './Mixes-page'
import '../../index.css'
 
const store = configureStore()
 
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <MixesPage />
      </Provider>
    )
  }
}