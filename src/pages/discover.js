import React from 'react';
import { Link } from 'react-router-dom';

import CarouselMedia from '../components/CarouselMedia';
import Images from '../components/ImagePosts';
import Nav from '../components/Nav';




const Discover = () => {

    return (
        <section id="news">
            <div className="statusbar"></div>
            <div className="title"><h1>Discover</h1></div>
            <div className="news-posts"><p>WHAT'S NEW TODAY</p></div>
            <Link className="media-container" exact to="/fullscreen">
                <CarouselMedia></CarouselMedia>
            </Link>
            <div className="title"><p>BROWSE ALL</p></div>
            <Images></Images>
            <div className="see-more">
                <Link exact to="/discover">
                    <span>SEE MORE</span>
                </Link>
            </div>
            <Nav></Nav>
        </section>
    );
};

export default Discover;