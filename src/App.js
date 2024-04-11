import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "./App.css"; // Import your global styles here if needed

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <nav className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-center">
            <Link to="/" className="px-4">
              Home
            </Link>
            <Link to="/about" className="px-4">
              About
            </Link>
            <Link to="/tech-stack" className="px-4">
              Tech Stack
            </Link>
            <Link to="/projects" className="px-4">
              Projects
            </Link>
            <Link to="/contact" className="px-4">
              Contact
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/tech-stack" component={TechStack} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
