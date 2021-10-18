import React from 'react';
import { Link } from 'react-router-dom';
import {  motion } from "framer-motion";


import profil2 from '../media/Ellipse/Ellipse2.png'
import post1High from '../media/posts/post1High.png'
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

const ImageFullScreen = () => {
    return (
        <motion.div className="imageFullScreen-container" animate="in" initial="out" variants={pageVariants} transition={pageTransition}>
            <img src={post1High} alt="post1" className="High"/>
            <div className="profilFullScreen-container">
                <Profil image={profil2} name="Ridhwan Nordin" twitter="@ridzjcob"></Profil>
                <Link exact to="/discover"><img src={quit} alt="quit" className="quit"/></Link>
            </div>
        </motion.div>
    );
};

export default ImageFullScreen;