import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Admin from "./pages/Admin";
import { useCounter } from "./utils/sweet_state";
import Load from "./pages/Load";
import axios from "axios";

const App = () => {
  const location = useLocation();
  const [{ loaded }, { setIsDark, setProjects, setLogged }] = useCounter();

  //handlers
  const handleExit = () => {
    const pathname = location.pathname;
    const isBckDark =
      pathname === "/" ||
      pathname === "/portfolio" ||
      pathname === "/contact" ||
      pathname === "/admin"
        ? 0
        : 1;

    setIsDark(isBckDark);
    window.scrollTo(0, 0);
  };

  // store init
  useEffect(() => setProjects(), []);

  //set token
  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    const url = `${process.env.REACT_APP_URL}/user/tokenIsValid`;
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };

    if (!token) {
      token = "";
      return setLogged(false, token);
    }

    axios
      .post(url, null, headers)
      .then((resp) => resp && setLogged(true, token))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      {!loaded ? (
        <Load />
      ) : (
        <AnimatePresence exitBeforeEnter onExitComplete={handleExit}>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/:id" component={Project} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </AnimatePresence>
      )}
    </main>
  );
};

export default App;
