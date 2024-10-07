import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Forget from "./Components/Forget Password/Forget";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Signup />
      <Forget/>
    </>
  );
}

export default App;
