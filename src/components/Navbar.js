import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="pageLinks">
        <Link to='/' className="navlink">BIG</Link>
        <Link to='/masons-room' className="navlink">MASON'S ROOM</Link>
      </div>
      <div className="socialLinks">
        <div className="navlink">LINKS</div>
      </div>
    </header>
  );
};

export default Navbar;
