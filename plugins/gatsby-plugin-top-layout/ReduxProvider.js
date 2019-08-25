import React from "react"
import { Provider } from "react-redux"

import createStore from "../../src/state/create-store"

const ReduxProvider = ({ children }) => {
  const store = createStore()

  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
