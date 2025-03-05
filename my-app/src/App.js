import React from "react";
import Header from "./components/Header";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Login from "./components/Login";
import FirstMain from "./components/FirstMain";
import FirstSide from "./components/FirstSide";
import SecondSide from "./components/SecondSide";
import ThirdSide from "./components/ThirdSide";
import ForthSide from "./components/ForthSide";
import SecondMain from "./components/SecondMain";

function App() {
  return (
    <div className="w-screen h-screen min-w-[1200px] min-h-[2100px] overflow-hidden bg-white flex flex-col">
      <Header />
      <Navigation />


      {/* Main & Side Layout */}
      <div className="flex w-full h-full">
        {/* Main */}
        <div className="w-2/3 h-full flex flex-col mx-4 my-4 space-y-4">
          <FirstMain />
          <SecondMain />
        </div>

        {/* Side */}
        <div className="w-1/3 h-full flex flex-col">
          <Login />
          <FirstSide />
          <SecondSide />
          <ThirdSide />
          <ForthSide />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;