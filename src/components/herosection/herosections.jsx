import React from 'react';
import "./herosection.css";
import Partners from '../partners/partners';
import logo from "/src/assets/herosection/Group 35.png"
const Herosections = () => {
  return (
    <>
      <div className="hero-container">

        <div className='hero-main'>
          <div className='header-herosection'>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className='links-hero-header'>
              <div className='links-main'>
                <span className='hero-link-item'>OPNChain</span>
                <span className='hero-link-item'>iCognative</span>
                <span className='hero-link-item'>OPNVerse</span>
              </div>
              <span>
                <button className="join-button-hero">
                  Join Now <div className="hero-arrow">→</div>
                </button>
              </span>
            </div>
          </div>

          <div className='hero-content'>

            <div className='herocontent-text'>
              <p>An integrated web3 ecosystem</p>
              <h1>
                Decentralized.<br />
                <span>Cognitive.</span><br />
                Spatial.
              </h1>
            </div>
            <div>
              <button className="join-button-hero-content">
                Roadmap<div className="hero-arrow">→</div>
              </button>
            </div>
          </div>
        </div>

        <div className='hero-cta-box'>
          <h1>Check out the UAE Golden Visa Portal</h1>
          <div className="cta-arrow">→</div>
        </div>



      </div>
      <Partners />
    </>
  );
}

export default Herosections;
