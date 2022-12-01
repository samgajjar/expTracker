import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  }
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    primary: {
      //teal
      light: "#339388",
      main: "#00796b",
      dark: "#00544a",
      contrastText: "#fff"
    },
    secondary: {
      //light green
      light: "#486f27", //#757ce8
      main: "#689f38", //#3f50b5
      dark: "#86b25f", //#002884
      contrastText: "#fff"
      // },
      // amber: { //amber
      //   light: '#ffcd38',
      //   main: '#ffc107',
      //   dark: '#b28704',
      //   contrastText: '#000'
    },
    typography: {
      useNextVariants: true
    }
  }
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      //teal
      light: "#339388",
      main: "#00796b",
      dark: "#00544a",
      contrastText: "#fff"
    },
    secondary: {
      //light green
      light: "#486f27", //#757ce8
      main: "#689f38", //#3f50b5
      dark: "#86b25f", //#002884
      contrastText: "#fff"
      // },
      // amber: { //amber
      //   light: '#ffcd38',
      //   main: '#ffc107',
      //   dark: '#b28704',
      //   contrastText: '#000'
    },
    typography: {
      useNextVariants: true
    }
  }
});

export { darkTheme, lightTheme };
