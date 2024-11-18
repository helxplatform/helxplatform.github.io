import React, { Fragment, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Container, Drawer, IconButton, useMediaQuery, Paper, Typography } from '@mui/material'
import { Menu as MenuIcon, Close as CloseMenuIcon } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { Link } from '../link'

const mainMenuLinks = [
  {
    title: 'Home',
    slug: ''
  },
  {
    title: 'About',
    slug: 'about'
  },
  {
    title: 'Features',
    slug: 'features'
  },
  {
    title: 'Resources',
    slug: 'resources'
  },
  {
    title: 'EduHeLx',
    slug: 'eduhelx'
  }
]

export const Brand = props => {
  const style = {
    alignItems: 'center',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto',
  }

  return (
    <Box component={ Link } to="/" style={ style } { ...props }>
      <StaticImage
        style={{ margin: '0 auto' }}
        src='../../images/helxLogo.svg'
        alt="HeLx Logo"
        placeholder="dominantColor"
        layout="constrained"
        className="brand"
      />
    </Box>
  )
}

const Toggler = ({ active, clickHandler }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <IconButton onClick={ clickHandler }>
        {
          active
            ? <CloseMenuIcon fontSize="large" />
            : <MenuIcon fontSize="large" />
        }
      </IconButton>
    </Box>
  )
}

const Menu = ({mainMenuLinks}) => {

  return (
    <Fragment>
      <Box component="nav" sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}>
        {
          mainMenuLinks.map((page) => (
            <Link
              to={`/${page.slug}`}
              key={ `main-menu-${ page.slug }` }
              activeClassName="active"
            >
              <Typography sx={{fontWeight: '500'}}>
                { page.title }
              </Typography>
            </Link>
          ))
        }
      </Box>
      <Link
        to="/contact"
        style={{textDecoration: "none"}}
      >
        <Typography sx={{fontWeight: '500'}}>
          Contact Us
        </Typography>
      </Link>
    </Fragment>
  )
}

const MobileMenu = ({mainMenuLinks}) => {
  const theme = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    '& .MuiPaper-root': {
      width: '100vw',
      maxWidth: '500px',
      alignItems: 'stretch',
    },
    '& a': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '1rem 2rem',
      transition: 'background-color 250ms',
      '&:hover': {
        color: theme.palette.branding.darkGranite,
        backgroundColor: `${ theme.palette.primary.main }24`,
      },
    },
    '& a.active': {
      backgroundColor: `${ theme.palette.primary.main }44`,
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: `${ theme.palette.primary.main }44`,
      },
    },

  }

  const handleClickToggler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Fragment>
      <Drawer open={ menuOpen } onClose={ () => setMenuOpen(false) } sx={ styles }>
        <Brand onClick={ () => setMenuOpen(false) } />
        {
          mainMenuLinks.map((page) => (
            <Link
              to={ `/${page.slug}` }
              key={ `mobile-main-menu-${ page.slug }` }
              onClick={ () => setMenuOpen(false) }
              activeClassName="active"
            >
              <Typography sx={{fontWeight: '500'}}>
                { page.title }
              </Typography>
            </Link>
          ))
        }
        <Link
          to="/contact"
          onClick={ () => setMenuOpen(false) }
          activeClassName="active"
        >
          <Typography sx={{fontWeight: '500'}}>
            Contact
          </Typography>
        </Link>
      </Drawer>
      <Toggler active={ menuOpen } clickHandler={ handleClickToggler } />
    </Fragment>
  )
}

export const Header = () => { 
  const compact = useMediaQuery('(max-width: 900px)');
  const theme = useTheme()

  const styles = {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      alignItems: 'stretch',
      position: 'sticky',
      top: 0,
      padding: 0,
      height: '3rem',
      zIndex: 999,
      backgroundColor: theme.palette.branding.offWhite,
      boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgb(0,0,0,0.02)',
      '& a': {
        display: 'flex',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: '1px',
        color: theme.palette.branding.darkGranite,
        transition: 'background-color 250ms, color 250ms',
      },
      '& a.active': {
        backgroundColor: `${ theme.palette.primary.main }24`,
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.primary.main,
          backgroundColor: `${ theme.palette.primary.main }24`,
        },
      },
      '& a:hover': {
        color: theme.palette.primary.main,
        backgroundColor: `${ theme.palette.primary.main }11`,
      },
    },
  }
  return (
    <Paper component="header" elevation="8" square sx={styles.root}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Brand />
        { compact ? <MobileMenu mainMenuLinks={mainMenuLinks}/> : <Menu mainMenuLinks={mainMenuLinks} /> }
      </Container>
    </Paper>
  )
}

