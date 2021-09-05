import React, { useState } from "react";
import logo from '../images/logo.svg'

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
              <a className='nav-link' href='https://#'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='https://pricing'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='https://resources'>
                Resources
              </a>
            </li>
          </ul>

          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
                <a className='nav-link' href='https://features'>
                    Login
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link signup' href='https://features'>
                    Sign Up
                </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

    {/* Navbar for mobile screens */}
    <div className={isMobile ? ('mini-nav') : ('no-display')}>
      <ul className='navbar-nav'>
        <li className='nav-item-2'>
          <a className='nav-link' href='https://#'>Features</a>
        </li>
        <li className='nav-item-2'>
          <a className='nav-link' href='https://pricing'>Pricing</a>
        </li>
        <li className='nav-item-2'>
          <a className='nav-link' href='https://resources'>Resources</a>
        </li>
      </ul>
      <hr />

      <ul className='navbar-nav'>
        <li className='nav-item-2'>
            <a className='nav-link' href='https://features'>
                Login
            </a>
        </li>
        <li className='nav-item-2'>
            <a className='nav-link signup' href='https://features'>
                Sign Up
            </a>
        </li>
      </ul>

    </div>
    </>
  );
};

export default Header;
