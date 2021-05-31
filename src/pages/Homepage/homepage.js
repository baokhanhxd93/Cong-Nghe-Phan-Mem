import React, { useEffect, useState } from 'react'
import "../../assets/scss/Layout/homepage.scss" 
import Login from '../Auth/Login'

function Homepage(){
  return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <a >EAT CLEAN</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href='../Auth/Login' >Log in</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Homepage;