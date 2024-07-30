import React from 'react';
import "./productscard.css";
import cardimg1 from "/src/assets/productcard/e94e5d19b0f82202629337dde40c63c2.jpeg";
import cardimg2 from "/src/assets/productcard/bb9e11f816b67852f0925236dfe86e38.jpeg";
import cardimg3 from "/src/assets/productcard/304b1867f362f969c72075189f46426a.jpeg";

const Productscard = () => {
    const cardData = [
        {
            tag: 'Decentralised',
            title: 'OPNChain',
            description: 'A high-performance, environmentally sustainable blockchain that supports censorship-resistant and tamper-proof applications, offering a foundation for decentralized computing and digital asset transactions.',
            image: cardimg1
        },
        {
            tag: 'Cognitive',
            title: 'iCognitive',
            description: 'A platform enabling users to build applications without coding, leveraging modular components and AI-enhanced development tools.',
            image: cardimg2
        },
        {
            tag: 'Spatial',
            title: 'OPNVerse',
            description: 'A hyper-realistic, AI-empowered, dynamic and immersive platform revolutionizing Web3 experience, empowering entities, fostering community connectivity within a connected digital ecosystem.',
            image: cardimg3
        }
    ];

    return (
        <div className='Productscard-container'>
            <div className="headline headings">
            <div className="tagline"><p>Products</p></div>
            <h1>
                    Discover IOPn
                </h1>
                <p>
                    Explore an ecosystem where technology serves <br /> humanity & empowers people.
                </p>
            </div>

            <div className='card-main'>
                {cardData.map((card, index) => (
                    <div key={index} className="card-container" style={{ backgroundImage: `url(${card.image})` }}>
                        <div className="card-content">
                            <div className="card-tag">{card.tag}</div>
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-description">{card.description}</p>
                        </div>
                        <div className="card-icon-container">
                            <div className="card-icon">→</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productscard;
