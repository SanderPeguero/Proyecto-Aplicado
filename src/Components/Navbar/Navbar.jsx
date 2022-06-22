import * as React from 'react';
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
import Search from '../Search/Search.jsx'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
// import './Navbar.module.css'




const Navbar = ({ setOpenSignIn, setOpenLogin, setOpenCarShop, setOpenChat, shoppingCart, products }) => {

  const handleOpenSigIn = () => setOpenSignIn(true)
  const handleOpenLogin = () => setOpenLogin(true)
  const handleOpenCarShop = () => setOpenCarShop(true)
  const handleOpenChat = () => setOpenChat(true)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" style={{
      background: '#000000',
      height: '5rem',
      boxShadow: 'none',
      zIndex: '1'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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

{/* 
          {/*Dropdown Menu*/}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none', bgcolor: 'black' } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
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






          {/*PC */}
          <Box sx={{ flexGrow: 1 }} style={{ margin: '0' }}>

            <Toolbar onClick={handleCloseNavMenu} style={{ display: 'flex', justifyContent: 'flex-end', height: '-webkit-fill-available', marginLeft: '1rem' }} disableGutters>

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

              {/*Cart Shopping */}
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

              

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
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
              </Typography>

              {/* */}

              {/* Log In*/}
              {/*               
                <ButtonUnstyled onClick={handleOpenLogin} className={styles.navbarLink} style={{
                  fontSize: '1.15rem',
                  fontfamily: 'arial',
                  textTransform: 'none',
                  background: 'none',
                  border: '0',
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
                  padding: '0'
                }}>
                  Sign In
                </ButtonUnstyled> */}

            </Toolbar>




          </Box>

          
          {/*Dropdown Menu*/}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none', bgcolor: 'black' } }}>
           

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

            <Menu
              id="basic-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              className={styles.Menu}
              PaperProps={{ sx: { backgroundImage: 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)' } }}
            >
              <a href="#/" className={styles.MobileNavLink}>
              <MenuItem onClick={handleCloseNavMenu}>
                <div style={{ fontSize: '1.45rem'}}>
                  Home
                </div>
              </MenuItem>
              </a>
              <a className={styles.MobileNavLink} href="#/store">
                <MenuItem onClick={handleCloseNavMenu}  >
                    <div style={{ fontSize: '1.45rem'}}>
                      Store
                    </div>
                </MenuItem>
              </a>

              <a className={styles.MobileNavLink} href="#/wallet">
                <MenuItem onClick={handleCloseNavMenu}  >
                    <div style={{ fontSize: '1.45rem'}}>
                      Wallet
                    </div>
                </MenuItem>
              </a>

              <a className={styles.MobileNavLink} onClick={handleOpenLogin}>
                <MenuItem onClick={handleCloseNavMenu}  >
                    <div style={{ fontSize: '1.45rem'}}>
                      Log In
                    </div>
                </MenuItem>
              </a>

              <a className={styles.MobileNavLink} onClick={handleOpenSigIn}>
                <MenuItem onClick={handleCloseNavMenu}  >
                    <div style={{ fontSize: '1.45rem'}}>
                      Sign In
                    </div>
                </MenuItem>
              </a>

            </Menu>
          </Box>

          {/*Setting del avatar */}
          {/* <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              
              sx={{ mt: '45px'}}
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

              <MenuItem onClick={handleCloseUserMenu}>
               
                <ButtonUnstyled onClick={handleOpenSigIn} className={styles.navbarLink} style={{
                  fontSize: '1.15rem',
                  fontfamily: 'arial',
                  textTransform: 'none',
                  background: 'none',
                  border: '0',
                  padding: '0'
                }}>
                  Sign In
                </ButtonUnstyled>


              </MenuItem>
              <MenuItem>
               
                <ButtonUnstyled onClick={handleOpenLogin} className={styles.navbarLink} style={{
                  fontSize: '1.15rem',
                  fontfamily: 'arial',
                  textTransform: 'none',
                  background: 'none',
                  border: '0',
                  padding: '0'
                }}>
                  Log In
                </ButtonUnstyled>
              </MenuItem>

            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    // <Box sx={{ flexGrow: 1 }} style={{ zIndex: '1', margin: '0' }}>
    //   <AppBar position="static"
    //     style={{
    //       background: '#000000',
    //       height: '5rem',
    //       boxShadow: 'none'
    //     }
    //     }>
    //     <Toolbar style={{ height: '-webkit-fill-available', marginLeft: '1rem' }}>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="open drawer"
    //         sx={{ mr: 2 }}
    //         href="#/"
    //       >
    //         {/* <h4 style={{ alignSelf: 'start' }} >QSwap</h4> */}
    //         <img src={logo} alt="" style={{ height: '2.6rem', width: '3rem', alignSelf: 'start' }} />
    //       </IconButton>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    //       >
    //         {/* <link href="/movies" className="nav-link" placeholder='Store'/> */}
    //         {/* <a href="/store" style={{marginRight:'1rem'}}>Store</a>
    //         <a href="/chat" style={{marginRight:'1rem'}}>Chat</a>
    //         <a href="/wallet" style={{marginRight:'1rem'}}>Wallet</a> */}
    //         {/* Store
    //         </link> */}
    //         <a href="#/" className={styles.navbarLink}>
    //           Home
    //         </a>
    //         <a href="#/store" className={styles.navbarLink}>
    //           Store
    //         </a>
    //         <a href="#/wallet" className={styles.navbarLink}>
    //           Wallet
    //         </a>

    //       </Typography>

    //       <Search products={products}/>

    //       <ButtonUnstyled onClick={handleOpenCarShop} className={styles.navbarLink} style={{
    //         fontSize: '1.15rem',
    //         fontfamily: 'arial',
    //         textTransform: 'none',
    //         background: 'none',
    //         border: '0',
    //         padding: '0'
    //       }}>
    //         <Badge color="secondary" badgeContent={shoppingCart.length}>
    //           <ShoppingCartCheckoutRoundedIcon /> 
    //         </Badge>
    //       </ButtonUnstyled>

    //       <ButtonUnstyled onClick={handleOpenSigIn} className={styles.navbarLink} style={{
    //         fontSize: '1.15rem',
    //         fontfamily: 'arial',
    //         textTransform: 'none',
    //         background: 'none',
    //         border: '0',
    //         padding: '0'
    //       }}>
    //         Sign In
    //       </ButtonUnstyled>

    //       <ButtonUnstyled onClick={handleOpenLogin} className={styles.navbarLink} style={{
    //         fontSize: '1.15rem',
    //         fontfamily: 'arial',
    //         textTransform: 'none',
    //         background: 'none',
    //         border: '0',
    //         padding: '0'
    //       }}>
    //         Log In
    //       </ButtonUnstyled>

    //     </Toolbar>
    //   </AppBar>
    // </Box>
  )
}


export default Navbar