import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from "./components/Footer"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
