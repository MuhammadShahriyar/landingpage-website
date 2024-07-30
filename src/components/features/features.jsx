import React from 'react';
import './features.css';
import feature1 from '/src/assets/featurescard/feature1.jpeg';
import feature2 from '/src/assets/featurescard/feature2.jpeg';
import feature3 from '/src/assets/featurescard/fesature3.jpeg'; // corrected the typo from "fesature3.jpeg"
import feature4 from '/src/assets/featurescard/feature4.jpeg';
import feature5 from '/src/assets/featurescard/feature5.jpeg';

const cardsData = [
    {
        image: feature1,
        title: 'Empowering Innovation',
        description: 'Join IOPn\'s Web3 journey. Build, contribute, and shape the future in a user-driven, blockchain-powered ecosystem.'
    },
    {
        image: feature2,
        title: 'Your Data. Your Rules.',
        description: 'IOPn prioritizes privacy. Secure, user-controlled data management keeps your information yours.'
    },
    {
        image: feature3,
        title: 'Own Your Digital World',
        description: 'Control your identity and data in IOPn\'s decentralized space. Break free from big tech dominance.'
    },
    {
        image: feature4,
        title: 'Seamless Integration',
        description: 'Experience the seamless integration of cutting-edge technologies, ensuring a smooth transition to Web3.'
    },
    {
        image: feature5,
        title: 'Future-Proof Solutions',
        description: 'Stay ahead with future-proof solutions designed to adapt and scale with your evolving needs in the digital age.'
    },
   
];

const Features = () => {
    return (
        <div className="section-container">
            <div className="headline">
                <div className="tagline"><p>The Broken Web A New Answer</p></div>
                <h1>
                    Big Tech dominates your digital life.
                    <br />
                    Imagine a web built around user sovereignty,
                    <br />
                    not corporate control
                </h1>
                <p>
                    IOPn is the answer. We leverage blockchain, AI, and cutting-edge spatial computing to build a
                    user-centric Web3 ecosystem. Own your data, experience immersive worlds, and leverage intelligent tools.
                    Empowering 1 billion users with digital freedom.
                </p>
            </div>
            <div className="cards">
            {cardsData.map((card, index) => (
                    <div key={index} className="features-card" style={{ backgroundImage: `url(${card.image})` }}>
                        <div className="features-card-content">
                            <div className="features-card-content-text">

                            <h2 className="features-card-title">{card.title}</h2>
                            <p className="features-card-description">{card.description}</p>
                            </div>
                        </div>
                        <div className="features-card-icon-container">
                            <div className="features-card-icon">→</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
