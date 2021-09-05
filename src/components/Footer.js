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
                    <p><a href='https://link'>Link Shortening</a></p>
                    <p><a href='https://link'>Branded Links</a></p>
                    <p><a href='https://link'>Analytics</a></p>
                    
                </div>
                <div className=' col-md-2 resources'>
                    <h5>Resources</h5>
                    
                    <p><a href='https://link'>Blog</a></p>
                    <p><a href='https://link'>Developers</a></p>
                    <p><a href='https://link'>Support</a></p>
                    
                </div>
                <div className='col-md-2 company'>
                    <h5>Company</h5>
                    
                    <p><a href='https://link'>About</a></p>
                    <p><a href='https://link'>Our Team</a></p>
                    <p><a href='https://link'>Careers</a></p>
                    <p><a href='https://link'>Contact</a></p>
                    
                </div>
                <div className='col-md-3 socials'>
                    <a href='https://link'><GrFacebook /></a>
                    <a href='https://link'><FaTwitter /></a>
                    <a href='https://link'><FaPinterest /></a>
                    <a href='https://link'><FaInstagram /></a> 
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
                Coded by <a href="https://ernestizic.netlify.app">ernestizic</a>.
            </div>

            
        </footer>
    )
}
