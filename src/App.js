import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import PropertyDetails from "./pages/PropertyDetails";
import LogIn from "./components/LogIn";
// import { Login } from "lucide-react";
const App = () => {
  return (
    <div className="max-w [1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
//to open terminal press ctrl+shift+`
