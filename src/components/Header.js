import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './common.css'
const Header = () => {
  const data = useSelector(state => state.cart)
  console.log(data)
  return (
    <header className="header">
      <h3><Link to='/'>LightShop</Link></h3>
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
    </header>
  );
};

export default Header;