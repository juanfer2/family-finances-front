import { green } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#6fe6b2',
      main: '#00c16e',
    },
    secondary: {
      main: '#FFFF',
    },
    error: {
      main: '#f85a40',
    },
  },
})
