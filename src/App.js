import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import { MuiThemeProvider } from "@material-ui/styles";
// import { createTheme } from "@material-ui/styles";
// import jwtDecode from 'jwt-decode';

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//components
import Navbar from "./components/Navbar";
// import AuthRoute from './util/AuthRoute';

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
//     },
//     form: {
//       textAlign: "center"
//     },
//     pageTitle: {
//       margin: "20px auto 20px auto"
//     },
//     textField: {
//       margin: "10px auto 10px auto"
//     },
//     button: {
//       margin: "10px auto 10px auto",
//       position: "relative"
//     },
//     progress: {
//       position: "absolute"
//     }
//   }
// });

export class App extends Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            {/* <Routes>
              {decodedToken && (
                <Route exact path="/" element={<Home/>} />
              )}
              {!decodedToken && (
                // <Navigate to='/login' />
                <Route exact path="/login" element={<Login/>}/>
              )}
              <Route exact path="/signup" element={<Signup/>}/>
            </Routes> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;
