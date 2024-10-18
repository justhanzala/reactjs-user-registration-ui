import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Forget from "./Components/Forget Password/Forget";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Login /> */}
      <Routes>
      <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/forget" element={<Forget />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
