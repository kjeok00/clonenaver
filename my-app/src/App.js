import React from "react";
import Header from "./components/Header";
import './App.css';
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
