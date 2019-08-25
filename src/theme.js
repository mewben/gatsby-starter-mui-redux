import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import lightGreen from "@material-ui/core/colors/lightGreen"

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: lightGreen,
    contrastThreshold: 2,
  },
})

export default responsiveFontSizes(theme)
