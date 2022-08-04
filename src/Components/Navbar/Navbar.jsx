import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import styles from './Navbar.module.css'
import logo from '../../../Logo.png'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import Badge from '@mui/material/Badge'
import Search from './Search/Search.jsx'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout', 'Pedidos'];

const Navbar = ({ setOpenSignIn, setOpenLogin, setOpenCarShop, shoppingCart, products }) => {

  const handleOpenSigIn = () => setOpenSignIn(true)
  const handleOpenLogin = () => setOpenLogin(true)
  const handleOpenCarShop = () => setOpenCarShop(true)
  const variable = false
  const [UserId, setUserId] = useState(null);
  
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // useEffect(() => {
  //   if(localStorage.getItem('UserId')){
  //     setUser(JSON.parse(localStorage.getItem('user')))
  //   }
  //   if(localStorage.getItem('room')){
  //     setroom(localStorage.getItem('room'))
  //   }
  // }, [])

  // const handleUser = () => {
  //   return true if localStorage.getItem("UserId")
  // }

  return (

    <AppBar position="static" style={{
      background: '#000000',
      height: '5rem',
      boxShadow: 'none',
      zIndex: '1'
    }}>
      <Container maxWidth="xl" style={{ marginTop: '0.5rem' }}>
        <Toolbar disableGutters>
          {/*------------------------------------Quantum Cat Logo Medium Screens----------------------------------------*/}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', bgcolor: 'black' } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="" style={{ height: '2.6rem', width: '3rem', alignSelf: 'start' }} />
            </Typography>
          </Box> 

          {/*------------------------------------Quantum Cat Logo Small Screens----------------------------------------*/}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none', bgcolor: 'black' } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="" style={{ height: '2.6rem', width: '3rem', alignSelf: 'start' }} />
            </Typography>
          </Box> 
          {/*-----------------------------------------------------------------------------------------*/}

          
          {/*------------------------------------Large Screen NavBar Menu----------------------------------------*/}
          <Box sx={{ flexGrow: 1 }} style={{ margin: '0' }}>

            <Toolbar onClick={handleCloseNavMenu} style={{ display: 'flex', justifyContent: 'flex-end', height: '-webkit-fill-available', marginLeft: '1rem' }} >

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
              >

                <a href="#/" className={styles.navbarLink}>
                  Home
                </a>
                <a href="#/store" className={styles.navbarLink}>
                  Store
                </a>
                <a href="#/wallet" className={styles.navbarLink}>
                  Wallet
                </a>
              </Typography>

              <Search products={products} />
              
              {localStorage.UserId ? (
                
                <ButtonUnstyled onClick={handleOpenCarShop} className={styles.navbarLink} style={{
                  fontSize: '1.15rem',
                  fontfamily: 'arial',
                  textTransform: 'none',
                  background: 'none',
                  border: '0',
                  padding: '0'
                }}>
                  <Badge color="secondary" badgeContent={shoppingCart.length}>
                    <ShoppingCartCheckoutRoundedIcon />
                  </Badge>
                </ButtonUnstyled>

              ) : (
                <div></div>
              )}

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', md: 'block' } }}
              >


                {
                  localStorage.UserId ? (
                    <>
                      <ButtonUnstyled className={styles.navbarLink} style={{
                        fontSize: '1.15rem',
                        fontfamily: 'arial',
                        textTransform: 'none',
                        background: 'none',
                        border: '0',
                        margin: '0, 1rem, 0, 0',
                        padding: '0'
                      }}>
                        {localStorage.getItem("Name")}
                        {" "}
                        {localStorage.getItem("LastName")} 
                      </ButtonUnstyled>

                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt={localStorage.Name} src="/static/images/avatar/2.jpg" />
                        </IconButton>
                      </Tooltip>

                      <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                      </Menu>
                    </>
                  ) : (
                    <>
                    
                    <ButtonUnstyled onClick={handleOpenLogin} className={styles.navbarLink} style={{
                      fontSize: '1.15rem',
                      fontfamily: 'arial',
                      textTransform: 'none',
                      background: 'none',
                      border: '0',
                      margin: '0, 1rem, 0, 0',
                      padding: '0'
                    }}>
                      Log In
                    </ButtonUnstyled>

                    <ButtonUnstyled onClick={handleOpenSigIn} className={styles.navbarLink} style={{
                      fontSize: '1.15rem',
                      fontfamily: 'arial',
                      textTransform: 'none',
                      background: 'none',
                      border: '0',
                      margin: '0',
                      padding: '0'
                    }}>
                      Sign In
                    </ButtonUnstyled>
                    </>
                  )
                }

                
              </Typography>
            </Toolbar>
          </Box>
          {/*----------------------------------------------------------------------------------------------------*/}

          
          {/*------------------------------------Small Screen NavBar Menu----------------------------------------*/}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none', bgcolor: 'black' } }}>

            {/* ---------Hamburguer Menu Icon--------- */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* -------------------------------------- */}

            {/* -------------------------Hamburguer Menu--------------------------- */}
            <Menu
              id="basic-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{  display: { xs: 'block', md: 'none' } }}
              className={styles.Menu}
              PaperProps={{ sx: { backgroundImage: 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)' } }}
            >
              <a href="#/" className={styles.MobileNavLink}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <div style={{ fontSize: '1.45rem', marginLeft: '1rem' }}>
                    Home
                  </div>
                </MenuItem>
              </a>

              <a href="#/store" className={styles.MobileNavLink}>
                <MenuItem onClick={handleCloseNavMenu}>
                    <div style={{ fontSize: '1.45rem', marginLeft: '1rem' }}>
                      Store
                    </div>
                </MenuItem>
              </a>

              <a href="#/wallet" className={styles.MobileNavLink}>
                <MenuItem onClick={handleCloseNavMenu}>
                    <div style={{ fontSize: '1.45rem', marginLeft: '1rem' }}>
                      Wallet
                    </div>
                </MenuItem>
              </a>

              <a className={styles.MobileNavLink} onClick={handleOpenLogin}>
                <MenuItem onClick={handleCloseNavMenu}>
                    <div style={{ fontSize: '1.45rem', marginLeft: '1rem' }}>
                      Log In
                    </div>
                </MenuItem>
              </a>  

              <a className={styles.MobileNavLink} onClick={handleOpenSigIn}>
                <MenuItem onClick={handleCloseNavMenu}>
                    <div style={{ fontSize: '1.45rem', marginLeft: '1rem' }}>
                      Sign In
                    </div>
                </MenuItem>
              </a>

            </Menu>
            {/* ------------------------------------------------------------------- */}

          </Box>
          {/*----------------------------------------------------------------------------------------------------*/}

        </Toolbar>
      </Container>
    </AppBar>
  )
}


export default Navbar