import React from 'react';
import earth from "/src/assets/footer/8330e66869de78efdfe6da95a96ebd6d.jpeg";
import telegram from "/src/assets/footer/icons8-telegram-96.png"
import insta from "/src/assets/footer/icons8-instagram-26.png"
import x from "/src/assets/footer/icons8-twitterx-32.png"
import discord from "/src/assets/footer/icons8-discord-100.png"
import pisterest from "/src/assets/footer/icons8-pinterest-80.png"
import fb from "/src/assets/footer/icons8-facebook-100.png"
import logo from "/src/assets/herosection/Group 35.png"

import "./footer.css"
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-image">
                    <img src={earth} alt="Earth" />
                </div>

                <div className="footer-info">
                    <div className="footer-box">
                        <div className="footercard-tag">Get in touch with us</div>
                        <div className='footer-text'>
                            <h1>Let's Connect On-Chain</h1>
                            <p>Building the future of Web3 together. We'd love to hear from developers, creators, and anyone passionate about a more open internet. Feel free to reach out with any questions, feedback, or collaboration ideas.</p>
                        </div>
                    </div>
                    <div className="footer-socialmedia">

                        <div className='telegram iconfooter'><img src={telegram} alt="" /></div>
                        <div className='insta iconfooter'><img src={insta} alt="" /></div>
                        <div className='discord iconfooter'><img src={discord} alt="" /></div>
                        <div className='X iconfooter'><img src={x} alt="" /></div>
                        <div className='pisterest iconfooter'><img src={pisterest} alt="" /></div>
                        <div className='facebook iconfooter'><img src={fb} alt="" /></div>
                        <div></div>
                    </div>
                </div>
            </div>




            <footer className="footer-bottom">
                <div className='bootom-footer-frame'>

                    <div className='bootom-content'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <p className="description">
                            Embrace the future of Web3 with IOPn. Whether you're looking to innovate, invest, or simply explore, our ecosystem is where your digital aspirations become reality.
                        </p>
                    </div>
                    <div className="links">
                        <span className="link-item">OPNChain</span>
                        <span className="link-item">iCognative</span>
                        <span className="link-item">OPNVerse</span>
                        <span><button className="join-button">Join Now <div className="footer-arrow">→</div></button></span>

                    </div>
                </div>
                <p className="copyright">©2024 IOPn. All rights reserved</p>
            </footer>

        </div>
    );
}

export default Footer;
