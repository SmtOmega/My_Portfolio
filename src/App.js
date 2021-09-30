import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FooterSection from "./components/FooterSection";
import NavMenu from "./components/NavMenu";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path='/policy'>
            <PrivacyPolicyPage />
          </Route>
        </Switch>
        <FooterSection />
      </Router>
    </>
  );
}

export default App;
