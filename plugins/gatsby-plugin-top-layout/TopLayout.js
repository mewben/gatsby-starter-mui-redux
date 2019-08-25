import React from "react"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import CssBaseline from "@material-ui/core/CssBaseline"

import theme from "../../src/theme"
import ReduxProvider from "./ReduxProvider"

const TopLayout = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default TopLayout
