import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Condition from "./termsAndConditions/Condition";
import Privacy from "./components/privacyAndPolicy/Privacy";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms-and-conditions" element={<Condition />} />
          <Route path="/privacy-and-policy" element={<Privacy />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
