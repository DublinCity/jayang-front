import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { COLOR, FONT } from "./GlobalStyle";
import Footer from "./Footer";
import Main from "./Main/index";
import Community from "./Community/index";
import Gathering from "./Gathering/index";
import Education from "./Education/index";
import ScrollRestoration from "./Utils/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <GlobalStyle />
      <ThemeProvider theme={{ COLOR, FONT }}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/gathering">
            <Gathering />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
        </Switch>
      </ThemeProvider>
      <Footer />
    </Router>
  );
}

export default App;
