import React from 'react'
import "./goldenvisa.css"
import goldenimg from "/src/assets/goldenvisa/6b1f976bd2d2d9d218e72e807196f04a.jpeg"
const Goldernvisa = () => {
    return (
        <div className='goldenvisa-main'>
            <div className='goldenvisacard1'>

                <div className='opnchain-pb-text'>
                    <div className="headline">
                        <div className="tagline"><p>About us</p></div>
                        <h1>
                        An Integrated Web3 Ecosystem
                        </h1>
                        <p className='opnchain-pb-text-p golden-visa-p'>
                        Big Tech dominates your digital life. Imagine a web built around user sovereignty, not corporate control. <br />
                        IOPn is the answer. We leverage blockchain, AI, and cutting-edge spatial computing to build a user-centric Web3 ecosystem. Own your data, experience immersive worlds, and leverage intelligent tools. Empowering 1 billion users with digital freedom.
                        </p>
                    </div>
                    <div className='link-pb'>
                        <li>Learn More</li>
                        <div className="link-pb-arrow">→</div>
                    </div>
                </div>
            </div>

            <div className='goldenvisaimg'>
                {/* <img src={goldenimg} alt="" /> */}
            </div>
        </div>
    )
}

export default Goldernvisa