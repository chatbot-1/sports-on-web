import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Condition from "./termsAndConditions/Condition";
import Privacy from "./components/privacyAndPolicy/Privacy";
import { useEffect } from "react";
import About from "./components/about/About";
import Team from "./components/ourTeam/Team";
import Goal from "./components/goal/Goal";
import Contact from "./components/contacts/Contact";

function App() {

  // const {pathname} = useLocation();
  
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [pathname])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Team />} />
          <Route path="/" element={<Goal />} />
          <Route path="/" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Condition />} />
          <Route path="/privacy-and-policy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
