import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Home from "./components/Home";
import GetInTouch from "./components/GetInTouch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <MainContent />
            <GetInTouch />
          </Route>
          <Route exact path="/Shop">
            <MainContent />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
