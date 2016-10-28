// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { syncHistoryWithStore,routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import * as reducers from '../reducers'


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

// const DevTools = createDevTools(
//   <DockMonitor toggleVisibilityKey='ctrl-h'
//                changePositionKey='ctrl-q'
//                changeMonitorKey='ctrl-m'>
//     <LogMonitor theme="tomorrow" preserveScrollTop={false} />
//   </DockMonitor>
// )

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
    // applyMiddleware(thunkMiddleware, createLogger()),
    // DevTools.instrument()
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
