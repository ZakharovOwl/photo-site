//Global
import React from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

//GlobalStyle
import Nav from "./components/Nav";
import GlobalStyle from "./components/styles/GlobalStyle";
//Pages
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import MovieDetail from "./Pages/MovieDetail";
import OurWork from "./Pages/OurWork";
//Animate
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  

  return (
    <div className="App">
      <GlobalStyle />
      
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
