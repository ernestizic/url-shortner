import React from "react";
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand' href='home'>
          <img src={logo} alt='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
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
  );
};

export default Header;
