import './App.css';
import React from "react";


import {Link } from "react-router-dom";
import logo from './logo.png'


const Nav = () => {


  return (
    <nav>
        <span >
        <Link className="heading1" to="/">
          <img className="span-logo" src= {logo} alt="logo"/>
          </Link>
        </span>
        <div className="navhead">
            <Link className="nolink" to="/">
            <h3 className="heading1">Book Finder</h3>
            </Link>
        </div>
        <div>
          
        </div>
        <div>
        <Link className="navStyle" to='/about'>
            display all
            </Link>
        </div>

        <div>
        <Link className="navStyle" to='/upload'>
            add books
            </Link>
        </div>

    </nav>
  );
}

export default Nav;