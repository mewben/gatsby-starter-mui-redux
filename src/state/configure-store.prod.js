import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { multiClientMiddleware } from "redux-axios-middleware"

import rootReducer from "./root-reducers"
import axiosClients from "./axios-clients"

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, multiClientMiddleware(axiosClients))
  )
}
