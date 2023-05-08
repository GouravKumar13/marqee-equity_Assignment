import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { userDetails } from '../config';
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";


const theme = createTheme();

const SignIn = ({ isLogin }) => {
  const navigate = useNavigate();


  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === userDetails.name && password === userDetails.password) {
      localStorage.setItem('isLogin', JSON.stringify("LoggedIN"))
      navigate('/alltask', { replace: true })

    }
    else {
      toast.error('🩻 Please enter valid details', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  console.log(showPassword)

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <ThemeProvider theme={ theme }>

        <Container component="main" maxWidth="xs">

          <CssBaseline />
          <Box
            sx={ {
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            } }
          >
            <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={ email }
                onChange={ (event) => { setEmail(event.target.value) } }

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                //ik ankh laga do

                type={ showPassword ? "text" : "password" }
                id="password"
                autoComplete="current-password"
                value={ password }
                onChange={ (event) => { setPassword(event.target.value) } }
                InputProps={ {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={ () =>
                          setShowPassword(!showPassword)
                        }
                        onMouseDown={ () =>
                          setShowPassword(!showPassword)
                        }
                      >
                        { showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        ) }
                      </IconButton>
                    </InputAdornment>
                  ),
                } }

              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
              >
                { " Sign In" }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className='cursor-pointer' onClick={ () => { setEmail(userDetails.name); setPassword(userDetails.password) } } >
                    Guest User
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    { "Don't have an account? Sign Up" }
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </>
  );
}
export default SignIn