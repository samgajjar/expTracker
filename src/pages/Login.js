import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import { createTheme } from "@material-ui/styles";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { CircularProgress } from "@material-ui/core";
import { Navigate } from "react-router-dom";

import axios from "axios";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
// import { CompressOutlined } from '@mui/icons-material';
// import { Class } from '@mui/icons-material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       //teal
//       light: "#339388",
//       main: "#00796b",
//       dark: "#00544a",
//       contrastText: "#fff"
//     },
//     secondary: {
//       //light green
//       light: "#486f27", //#757ce8
//       main: "#689f38", //#3f50b5
//       dark: "#86b25f", //#002884
//       contrastText: "#fff"
//       // },
//       // amber: { //amber
//       //   light: '#ffcd38',
//       //   main: '#ffc107',
//       //   dark: '#b28704',
//       //   contrastText: '#000'
//     },
//     typography: {
//       useNextVariants: true
//     }
//   }
// });

const styles = {
  form: {
    textAlign: "center"
  },
  pageTitle: {
    margin: "20px auto 20px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    margin: "10px auto 10px auto",
    position: "relative"
  },
  progress: {
    position: "absolute"
  }
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: {},
      token: "",
      isOpen: true
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    // const navigation = useNavigation();
    // const navigate = useNavigate();

    axios
      .post("/login", userData)
      .then((res) => {
        localStorage.setItem("ExpTrackerToken", `Bearer ${res.data.token}`);
        console.log("token retrieved: ", res.data.token);
        this.setState({
          loading: false,
          token: res.data.token
        });
        console.log("token set: ", res.data.token);
        // this.props.history.push('/');
      })
      .catch((err) => {
        console.log("Error: ", err);
        console.log("Error Message: ", err.message);
        console.log("Error Response Data: ", err.response.data);
        this.setState({
          errors: err.response.data,
          loading: false,
          isOpen: true
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    const { loading, errors, token } = this.state;
    const { isOpen } = this.state;

    console.log("In render: ", token);

    return (
      // <MuiThemeProvider theme={theme}>
      <Grid container justifyContent="center" className={classes.form}>
        <Grid item sm={10} xs={10}>
          {/* <img src={AppIcon} alt='appImage'/> */}
          <Typography variant="h4" className={classes.pageTitle}>
            Logon
          </Typography>
          {errors.general && (
            <Collapse in={isOpen}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      this.setState({ isOpen: false });
                      // setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {errors.general}
              </Alert>
            </Collapse>
          )}
          {errors.error && (
            <Collapse in={isOpen}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      this.setState({ isOpen: false });
                      // setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {errors.error}
              </Alert>
            </Collapse>
          )}
          {token && <Navigate to="/" replace={true} />}
          <form noValidate onSubmit={this.handleSubmit}>
            {/* <Grid container>
            <Grid item sm vertical-align="middle">
              <p >Email Address</p>
            </Grid>
            <Grid item sm> */}
            <TextField
              required
              variant="outlined"
              size="small"
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            ></TextField>
            {/* </Grid>
          </Grid>
          <Grid container>
            <Grid item sm vertical-align="middle">
              <p >Password</p>
            </Grid>
            <Grid item sm> */}
            <TextField
              required
              variant="outlined"
              size="small"
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            ></TextField>
            {/* </Grid>
          </Grid> */}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size="20" className={classes.progress} />
              )}
            </Button>
            <br />
            <br />
            <small>
              Don't have an account? | <Link to="/signup">Signup</Link>
            </small>
          </form>
        </Grid>
      </Grid>
      // </MuiThemeProvider>
      // <div>
      //   <h1>Login Page</h1>
      // </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
