import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../../../Logo.png'
import axios from 'axios';
import UrlApi from '../../../globals';
import swal from 'sweetalert'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://mui.com/"> */}
        Quantum 
      {/* </Link>{' '} */}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let objData = {
      Email: data.get('email'),
      Password: data.get('password'),
    };

    axios.post(UrlApi + '/users/login', objData)
      .then((response) => {
          
        swal({
          title: "Logged In!",
          text: "Enjoy Quantum Swap ;)",
          icon: "success",
          button: "Aww yiss!"
        });

        let user = response.data
        localStorage.setItem('UserId', user.UserId)
        localStorage.setItem('Name', user.Name)
        localStorage.setItem('LastName', user.LastName)
        localStorage.setItem('Email', user.Email)

      })
      .catch ((err) => {

        let notification = {
          icon: "error",
          button: "Try again :("
        }
        
        if (err.response.status == 404) {
          notification.title = "User Not Foud!"
          if (err.response.data.Exist) {
            notification.text = "The password you’ve entered is incorrect."
          } else {
            notification.text = "The email you entered isn’t connected to an account."
          }
        } else {
          notification.title = "Internal Server Error!"
          notification.text = err
        }

        swal(notification)

      })
  }
 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Avatar sx={{m: 0, bgcolor: '#000000', height: '4rem', width: '4rem'}}>
            <img src={logo} style={{ height: '2.6rem', width: '3rem', alignSelf: 'center' }}></img>
          </Avatar>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#000000'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}