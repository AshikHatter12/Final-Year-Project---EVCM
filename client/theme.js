import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        light: '#fbfffc',
        main: '#263137',
        contrastText: '#fff',
      },
      secondary: {
        light: '#fbfffc',
        main: '#37474f',
        contrastText: '#fff',
      },
        openTitle: grey['500'],
        protectedTitle: grey['300'],
        type: 'light'
      },
  })

  export default theme