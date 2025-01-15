import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { MainComp } from "./components/MainComp/MainComp";

function App() {
  return (
    <div className="App">
      <MainComp />
      {/* <Home />
      <Login /> */}
    </div>
  );
}

export default App;
