import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore,routerReducer } from 'react-router-redux'
import configureStore from './store/configureStore'

import './style/global.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const rootRoute = {
  path: '/',
  //component: require('./containers/App').default,
  getComponents(partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./routes/Index/main'))
    })
  },
  // getIndexRoute(partialNextState, cb) {
  //   require.ensure([], (require) => {console.log(1)
  //     cb(null, require('./routes/Index').default)
  //   },"index")
  // },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        //require('./routes/CompanyDefault') // 小企业版首页
      ])
    },"index_router")
  }
}

render(
  <Provider store={store}>
    <div id="rootContent">
      <Router history={history} routes={rootRoute} />
    </div>
  </Provider>,
  document.getElementById('root')
)
