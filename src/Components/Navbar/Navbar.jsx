import * as React from 'react';
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { color, style } from '@mui/system'
import styles from './Navbar.module.css'
import logo from '../../../Logo.png'
import Button from '@mui/material/Button'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import Badge from '@mui/material/Badge'
import Search from '../Search/Search.jsx'



// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

const Navbar = ({ setOpenSignIn, setOpenLogin, setOpenCarShop, setOpenChat, shoppingCart, products }) => {

  const handleOpenSigIn = () => setOpenSignIn(true)
  const handleOpenLogin = () => setOpenLogin(true)
  const handleOpenCarShop = () => setOpenCarShop(true)
  const handleOpenChat = () => setOpenChat(true)



  return (
    <Box sx={{ flexGrow: 1 }} style={{ zIndex: '1', margin: '0' }}>
      <AppBar position="static"
        style={{
          background: '#000000',
          height: '5rem',
          boxShadow: 'none'
        }
        }>
        <Toolbar style={{ height: '-webkit-fill-available', marginLeft: '1rem' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            href="#/"
          >
            {/* <h4 style={{ alignSelf: 'start' }} >QSwap</h4> */}
            <img src={logo} alt="" style={{ height: '2.6rem', width: '3rem', alignSelf: 'start' }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* <link href="/movies" className="nav-link" placeholder='Store'/> */}
            {/* <a href="/store" style={{marginRight:'1rem'}}>Store</a>
            <a href="/chat" style={{marginRight:'1rem'}}>Chat</a>
            <a href="/wallet" style={{marginRight:'1rem'}}>Wallet</a> */}
            {/* Store
            </link> */}
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
          
          <Search products={products}/>

          <ButtonUnstyled onClick={handleOpenCarShop} className={styles.navbarLink} style={{
            fontSize: '1.15rem',
            fontfamily: 'arial',
            textTransform: 'none',
            background: 'none',
            border: '0',
            padding: '0'
          }}>
            <Badge color="secondary" badgeContent={shoppingCart.length}>
              <ShoppingCartCheckoutRoundedIcon /> Cart
            </Badge>
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
          </ButtonUnstyled>

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

        </Toolbar>
      </AppBar>
    </Box>
  )
}


export default Navbar