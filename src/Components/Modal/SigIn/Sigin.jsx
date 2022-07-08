import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../../../Logo.png'
import axios from 'axios'
import UrlApi from '../../../globals'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://mui.com/"> */}
      Quantum
      {' '}
      { /* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let objData = {
      Email: data.get('email'),
      Password: data.get('password'),
      Name: data.get('firstName'),
      LastName: data.get('lastName')
    };

    axios.put(UrlApi + '/users/', objData)
      .then((response) => {
        console.log(response.data)
        if (response.data.ValidEmail && response.data.Executed) {
          swal({
            title: "Signed In!",
            text: "Enjoy Quantum Swap ;)",
            icon: "success",
            button: "Aww yiss!"
          });
        } else if (!response.data.ValidEmail) {
          swal({
            title: "Invalid Sing Up!",
            text: "This email already exists.",
            icon: "error",
            button: "Try again :("
          });
        } else if (!response.data.Executed) {
          swal({
            title: "Not Saved!",
            text: "Internal Server Error!",
            icon: "error",
            button: "Try again :("
          });
          console.log(err)
        }
      })
      .catch((err) => {
        swal({
          title: "Not Signed!",
          text: "Server Disconnected!",
          icon: "error",
          button: "Try again :("
        });
        console.log(err)
      })
  }

    

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
         <Avatar sx={{ m: 0, bgcolor: '#000000', height: '4rem', width: '4rem' }}>
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

          <Avatar sx={{ m: 1, bgcolor: '#000000' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}