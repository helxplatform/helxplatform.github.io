import React, { Fragment, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Button, Container, Drawer, IconButton, useMediaQuery, Paper, Typography } from '@mui/material'
import { Menu as MenuIcon, Close as CloseMenuIcon } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { Link } from '../link'

const Brand = props => {
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

const Menu = () => {
  const theme = useTheme()

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
    }
  ]

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
              <Typography variant='body1'>
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
        {/* <Button
          variant="contained"
          color="info"
          sx={{
            textTransform: "revert", 
            margin:"1.7rem auto",
            '&:hover': {
              backgroundColor: `${ theme.palette.branding.yellow }70`,
            }
          }}
        > */}
          <Typography variant='body1'>
            Contact Us
          </Typography>
        {/* </Button> */}
      </Link>
    </Fragment>
  )
}

const MobileMenu = () => {
  const theme = useTheme()
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
    }
  ]
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
        backgroundColor: `${ theme.palette.branding.deepPurple }24`,
      },
    },
    '& a.active': {
      backgroundColor: `${ theme.palette.branding.deepPurple }44`,
      color: theme.palette.branding.deepPurple,
      '&:hover': {
        color: theme.palette.branding.deepPurple,
        backgroundColor: `${ theme.palette.branding.deepPurple }44`,
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
              <Typography variant='subtitle1'>
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
          <Typography variant='subtitle1'>
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
      height: '6rem',
      zIndex: 999,
      backgroundColor: theme.palette.branding.offWhite,
      boxShadow: 'none',
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
        backgroundColor: `${ theme.palette.branding.deepPurple }24`,
        color: theme.palette.branding.deepPurple,
        '&:hover': {
          color: theme.palette.branding.deepPurple,
          backgroundColor: `${ theme.palette.branding.deepPurple }24`,
        },
      },
      '& a:hover': {
        color: theme.palette.branding.deepPurple,
        backgroundColor: `${ theme.palette.branding.deepPurple }11`,
      },
    },
  }
  return (
    <Paper component="header" sx={styles.root}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Brand />
        { compact ? <MobileMenu /> : <Menu /> }
      </Container>
    </Paper>
  )
}

