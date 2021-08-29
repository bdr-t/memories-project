import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
// import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// import Icon from './icon';
// import { signin, signup } from '../../actions/auth';
// import { AUTH } from '../../constants/actionTypes';
import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  
  function handleSubmit() {}

  function handleChange() {}

  function switchMode() {
    setIsSignUp(previsSignUp=> !previsSignUp)
  }

  function handleShowPassword() {
      setShowPassword(prevShowPassword=> !prevShowPassword)
  }
  return (
    <Container component="main" maxWidth={300}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign in" : "Sign up"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignUp ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
