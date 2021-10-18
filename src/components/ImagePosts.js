import React from 'react';
import { Link } from 'react-router-dom';

import '../css/components/ImagePosts.css'

import img1 from '../media/img/img1.png'
import img2 from '../media/img/img2.png'
import img3 from '../media/img/img3.png'
import img4 from '../media/img/img4.png'
import img5 from '../media/img/img5.png'
import img6 from '../media/img/img6.png'
import img7 from '../media/img/img7.png'
import img8 from '../media/img/img8.png'
import img9 from '../media/img/img9.png'
import img10 from '../media/img/img10.png'


const Images = () => {
    return (
        <div className="image-container">
            <div className="image-left">
                <img src={img1} alt="image1" className="small-image" />
                <img src={img3} alt="image3" className="high-image" />
                <img src={img5} alt="image5" className="high-image" />
                <img src={img7} alt="image7" className="high-image" />
                <img src={img9} alt="image9" className="high-image" />
            </div>
            <div className="image-right">
                <img src={img2} alt="image2" className="high-image" />
                <Link exact to="/fullscreen2"><img src={img4} alt="image4" className="high-image" /></Link>
                <img src={img6} alt="image6" className="high-image" />
                <img src={img8} alt="image8" className="high-image" />
                <img src={img10} alt="image10" className="small-image" />
            </div>
        </div>
    );
};

export default Images;