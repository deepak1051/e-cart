import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import './common.css'
import './header.css'

import navLogo from '../images/bird.svg'
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const data = useSelector(state => state.cart)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <header className="header">
      <h3><Link to='/'><img src={navLogo} alt="" style={{ height: '24px' }} />LightShop</Link></h3>
      <ul className="header-ul">
        <Link to='/'><li>Home</li></Link>

        <Link to='/cart'> <li>Cart</li></Link>
      </ul>
      <div className="header_content">
        <Link to="/cart">
          <p className="badge-container">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge">{data.totalQuantity}</span>
          </p>
        </Link>
        {/* <Link to="/">
          <p>
            <i className="fas fa-user"></i>
            Sign In
          </p>
        </Link> */}
      </div>

      <nav className="navBar">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
          )}
        </button>
        {navbarOpen && <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <NavLink
            to='/'
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to='/cart'
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Cart
          </NavLink>



        </ul>}
      </nav>

    </header>
  );
};

export default Header;