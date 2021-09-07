import React from 'react';
import logo from '../images/logo.svg';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className=' col-md-2 features'>
                    <h5>Features</h5>
                    <p><a href='link'>Link Shortening</a></p>
                    <p><a href='link'>Branded Links</a></p>
                    <p><a href='link'>Analytics</a></p>
                    
                </div>
                <div className=' col-md-2 resources'>
                    <h5>Resources</h5>
                    
                    <p><a href='link'>Blog</a></p>
                    <p><a href='link'>Developers</a></p>
                    <p><a href='link'>Support</a></p>
                    
                </div>
                <div className='col-md-2 company'>
                    <h5>Company</h5>
                    
                    <p><a href='link'>About</a></p>
                    <p><a href='link'>Our Team</a></p>
                    <p><a href='link'>Careers</a></p>
                    <p><a href='link'>Contact</a></p>
                    
                </div>
                <div className='col-md-3 socials'>
                    <a href='link'><GrFacebook /></a>
                    <a href='link'><FaTwitter /></a>
                    <a href='link'><FaPinterest /></a>
                    <a href='link'><FaInstagram /></a> 
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
                Coded by <a href="https://ernestizic.netlify.app">ernestizic</a>.
            </div>

            
        </footer>
    )
}
