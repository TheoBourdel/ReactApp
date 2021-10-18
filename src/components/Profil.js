import React from 'react';
import '../css/components/Profil.css'


const Profil = (props) => {
    return (
        <div className="info-container">
            <img src={props.image} alt="profil"/>
            <div className="nom">
                <p>{props.name}</p>
                <span>{props.twitter}</span>
            </div>
        </div>
    );
};

export default Profil;