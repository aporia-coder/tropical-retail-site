import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/App.scss";

// Pages
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";

// Components
import { Navbar } from "./components/Navbar";

// MUI
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C9A96A",
      light: "#FFF",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: "'Playfair Display', serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
