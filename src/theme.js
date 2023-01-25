import { createTheme } from '@mui/material/styles'

const branding = {
  scienceGreen: '#44BC9C',
  offWhite: '#F5F6F5',
  deepPurple: '#392D57',
  darkGranite: '#212121',
  earthBlue: '#37698B',
  dataGreen: '#239BA6',
  yellow: '#FDB614'
}

const palette = {
  primary: {
    main: branding.deepPurple,
  },
  secondary: {
    main: branding.scienceGreen
  },
  branding: branding,
}

const typography = {
  fontFamily: `Open Sans, sans-serif`,
  h1: {
    fontSize: 'clamp(1.8rem, 1.4250rem + 1.6667vw, 2.3rem)',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    marginBottom: '20px',
  },
  h2: {
    fontSize: 'clamp(1.4rem, 1.0250rem + 1.6667vw, 1.9rem)',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    marginBottom: '0.5rem',
  },
  h3: {
    fontSize: 'clamp(1.2rem, 0.7500rem + 2.0000vw, 1.8rem)',
    fontFamily: 'Open Sans',
    marginBottom: '0.5rem',
  },
  h4: {
    fontSize: 'clamp(1.1rem, 0.8000rem + 1.3333vw, 1.5rem)',
    fontFamily: 'Open Sans',
    margin: '0.5rem 0',
    },
  h6: {
    fontSize: '1.2rem',
    fontFamily: 'Open Sans',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.85,
    letterSpacing: '0.4px',
    fontWeight: 300,
  },
  body2: {
    fontSize: '0.9rem',
    lineHeight: 1.75,
    letterSpacing: '0.5px',
    fontWeight: 200,
  }
}

//

export const theme = createTheme({
  palette,
  typography,
})