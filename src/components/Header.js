import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
const Header = () => {
  return (
    <header className='bg-violet-300 py-4 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-6">
          <Link className='hover:text-violet-800 transition'to='/LogIn'>Log In</Link>
          <Link className='bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition'to="/SignUp">Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
