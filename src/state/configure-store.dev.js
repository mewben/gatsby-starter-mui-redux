import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { multiClientMiddleware } from "redux-axios-middleware"
import logger from "redux-logger"

import rootReducer from "./root-reducers"
import axiosClients from "./axios-clients"

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      // applyMiddleware(thunk, multiClientMiddleware(axiosClients)),
      applyMiddleware(thunk, multiClientMiddleware(axiosClients), logger),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./root-reducers", () => {
      const nextRootReducer = require("./root-reducers").default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
