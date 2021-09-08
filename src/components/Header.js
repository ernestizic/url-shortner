import React, { useState } from "react";
import logo from '../images/logo.svg';
import "animate.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand' href='home'>
          <img src={logo} alt='logo' />
        </a>

        <span className="ham" onClick={()=>setIsMobile(!isMobile)}> &#9776;</span>
        
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='features'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='pricing'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='resources'>
                Resources
              </a>
            </li>
          </ul>

          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
                <a className='nav-link' href='login'>
                    Login
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link signup' href='signup'>
                    Sign Up
                </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

    {/* Navbar for mobile screens */}
    <div className={isMobile ? ('mini-nav animate__animated animate__fadeInDown animate__faster') : ('no-display')}>
      <ul className='navbar-nav'>
        <li className='nav-item-2'>
          <a className='nav-link' href='feat'>Features</a>
        </li>
        <li className='nav-item-2'>
          <a className='nav-link' href='pricing'>Pricing</a>
        </li>
        <li className='nav-item-2'>
          <a className='nav-link' href='resources'>Resources</a>
        </li>
      </ul>
      <hr />

      <ul className='navbar-nav'>
        <li className='nav-item-2'>
            <a className='nav-link' href='login'>
                Login
            </a>
        </li>
        <li className='nav-item-2'>
            <a className='nav-link signup' href='signup'>
                Sign Up
            </a>
        </li>
      </ul>

    </div>
    </>
  );
};

export default Header;
