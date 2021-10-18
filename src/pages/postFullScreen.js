import React from 'react';
import { Link } from 'react-router-dom';
import {  motion } from "framer-motion";




import profil6 from '../media/Ellipse/Ellipse6.png'
import img4High from '../media/img/img4High.png'
import quit from '../media/icons/quit.png'
import Profil from "../components/Profil";

// effet de transition
const pageVariants = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "+100%"
    },
    leave: {
        y: "-100%"
    }
};
const pageTransition = {
    duration: 0.3
};

const postFullScreen = () => {
    return (
        <motion.div className="imageFullScreen-container" animate="in" initial="out" variants={pageVariants} transition={pageTransition}>
            <img src={img4High} alt="img4" className="High"/>
            <div className="profilFullScreen-container">
                <Profil image={profil6} name="Angelo Pantazis" twitter="@angelopantazis"></Profil>
                <Link exact to="/discover"><img src={quit} alt="quit" className="quit"/></Link>
            </div>
        </motion.div>
    );
};

export default postFullScreen;