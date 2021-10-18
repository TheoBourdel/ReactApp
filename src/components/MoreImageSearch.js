import React from 'react';
import '../css/components/ImageSearch.css'

import dog16 from '../media/dog/dog16.png'
import dog17 from '../media/dog/dog17.png'
import dog18 from '../media/dog/dog18.png'
import dog19 from '../media/dog/dog19.png'
import dog20 from '../media/dog/dog20.png'
import dog21 from '../media/dog/dog21.png'
import dog22 from '../media/dog/dog22.png'
import dog23 from '../media/dog/dog23.png'
import dog24 from '../media/dog/dog24.png'

const MoreImageSearch = () => {
    return (
        <div className="imageSearch-container">
            <img src={dog16} alt="dog16" className="dog-size" />
            <img src={dog17} alt="dog17" className="dog-size" />
            <img src={dog18} alt="dog18" className="dog-size" />
            <img src={dog19} alt="dog19" className="dog-size" />
            <img src={dog20} alt="dog20" className="dog-size" />
            <img src={dog21} alt="dog21" className="dog-size" />
            <img src={dog22} alt="dog22" className="dog-size" />
            <img src={dog23} alt="dog23" className="dog-size" />
            <img src={dog24} alt="dog24" className="dog-size" />
        </div>
    );
};

export default MoreImageSearch;