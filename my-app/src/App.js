import React from "react";
import Header from "./components/Header";
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Login from "./components/Login";
import FirstMain from "./components/FirstMain";
import FirstSide from "./components/FirstSide";
import SecondSide from "./components/SecondSide";
import Forthside from "./components/ForthSide";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Login />
      <FirstMain />
      <FirstSide />
      <SecondSide />
      <Forthside />
      <Footer />
    </div>
  );
}

export default App;
