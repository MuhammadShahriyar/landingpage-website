import React from 'react'
import "./partners.css"
import partner1 from "/src/assets/parternes/logo1.png"
import partner2 from "/src/assets/parternes/logo2.png"
import partner3 from "/src/assets/parternes/logo3.png"
import partner4 from "/src/assets/parternes/logo4.png"
import partner5 from "/src/assets/parternes/logo5.png"
import partner6 from "/src/assets/parternes/logo6.png"
import partner7 from "/src/assets/parternes/logo7.png"

const Partners = () => {

    const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];


    return (
        <div className="partners-container">
            {partners.map((partner, index) => (
                <div key={index} className="partner-logo">
                    <img src={partner} alt={`Partner ${index + 1}`} />
                </div>
            ))}
        </div>
    )
}

export default Partners