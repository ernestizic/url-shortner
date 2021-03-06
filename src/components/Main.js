import React from 'react'
import illus from '../images/illustration-working.svg';
import brcog from '../images/icon-brand-recognition.svg'
import idr from '../images/icon-detailed-records.svg'
import ifc from '../images/icon-fully-customizable.svg'
import UrlForm from './UrlForm';

const Main = () => {
    return (
        <div className='main'>
            <div className='ad-container'>
                <div className='ad'>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed <br />insights on how your links are performing.</p>
                    <a href='get started' className='btn'> Get Started </a>
                </div>
                <div className='ad-img'>
                    <img src={illus} alt='ad-img' className='img-fluid' />
                </div>
            </div>

            <div className='stat container-fluid'>
                <UrlForm />
                <div className='stat-head'>
                    <h1>Advanced Statistics</h1>
                    <p>Track how your links are performing across the web with <br/>
                    our advanced statistics dashboard.</p>
                </div>

                <div className='stat-flex  container'>
                    
                    <div className='cols' id='fir'>
                        <div className='brand-icon'>
                            <img src={brcog} alt=''/>
                        </div>
                        
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. 
                            Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className='cols' id='line'>
                        
                    </div>
                    <div className='cols' id='sec'>
                        <div className='brand-icon'>
                            <img src={idr} alt=''/>
                        </div>
                        
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people 
                            engage with your content helps inform better decisions.</p>
                    </div>
                    <div className='cols' id='line'>
                        
                    </div>
                    <div className='cols' id='thir'>
                        <div className='brand-icon-3'>
                            <img src={ifc} alt=''/>   
                        </div>
                        
                        <h3>Fully Cusomizable</h3>
                        <p>Improve brand awareness and content discoverability through 
                            customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>

            <div className='foot'>
                <h1>Boost your links today</h1>
                <a href='getstarted' className='btn'> Get Started </a>
                
            </div>
            
        </div>
    )
}

export default Main
