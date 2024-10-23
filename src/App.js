import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Forget from "./Components/Forget Password/Forget";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
      <Route exact path="/forget/*" element={<Forget />} />

        <Route exact path="/signup/*" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
