import React from 'react';
import { Link } from 'react-router-dom';

import '../css/components/Nav.css'
import home from '../media/icons/home.png'
import search from '../media/icons/search.png'
import add from '../media/icons/add.png'
import comment from '../media/icons/comment.png'
import person from '../media/icons/person.png'




const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link className="adjust" exact to="/discover"><img src={home} alt="home" className="nav-li-size" /></Link></li>
                <li><Link className="adjust" exact to="/search"><img src={search} alt="search" className="nav-li-size"/></Link></li>
                <li><div className="add-container"><img src={add} alt="add" className="nav-li-size" /></div></li>
                <li><img src={comment} alt="comment" className="nav-li-size" /></li>
                <li><img src={person} alt="person" className="nav-li-size" /></li>
            </ul>
        </nav>
    );
};

export default Nav;