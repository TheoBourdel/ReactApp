import React from 'react';

import '../css/components/ImageSearch.css'

import dog1 from '../media/dog/dog1.png'
import dog2 from '../media/dog/dog2.png'
import dog3 from '../media/dog/dog3.png'
import dog4 from '../media/dog/dog4.png'
import dog5 from '../media/dog/dog5.png'
import dog6 from '../media/dog/dog6.png'
import dog7 from '../media/dog/dog7.png'
import dog8 from '../media/dog/dog8.png'
import dog9 from '../media/dog/dog9.png'
import dog10 from '../media/dog/dog10.png'
import dog11 from '../media/dog/dog11.png'
import dog12 from '../media/dog/dog12.png'
import dog13 from '../media/dog/dog13.png'
import dog14 from '../media/dog/dog14.png'
import dog15 from '../media/dog/dog15.png'


const ImageSearch = () => {
    return (
        <div className="imageSearch-container">
            <img src={dog1} alt="dog1" className="dog-size" />
            <img src={dog2} alt="dog2" className="dog-size" />
            <img src={dog3} alt="dog3" className="dog-size" />
            <img src={dog4} alt="dog4" className="dog-size" />
            <img src={dog5} alt="dog5" className="dog-size" />
            <img src={dog6} alt="dog6" className="dog-size" />
            <img src={dog7} alt="dog7" className="dog-size" />
            <img src={dog8} alt="dog8" className="dog-size" />
            <img src={dog9} alt="dog9" className="dog-size" />
            <img src={dog10} alt="dog10" className="dog-size" />
            <img src={dog11} alt="dog11" className="dog-size" />
            <img src={dog12} alt="dog12" className="dog-size" />
            <img src={dog13} alt="dog13" className="dog-size" />
            <img src={dog14} alt="dog14" className="dog-size" />
            <img src={dog15} alt="dog15" className="dog-size" />
        </div>
    );
};

export default ImageSearch;