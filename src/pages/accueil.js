
import { Link } from 'react-router-dom'
import Profil from '../components/Profil';

import '../css/styles.css'

import profil from '../media/Ellipse/Ellipse.png'
import logo from '../media/logo.png'


function accueil() {

    return (
        <section>
            <div className="titre">
                <div className="statusbar"></div>
                <div className="titre-container">
                    <img src={logo} alt="logo"/>
                    <p>photo</p>
                </div>
                <div className="author-container">
                    <Profil image={profil} name="Pawel Czerwinski" twitter="@pawel_czerwinski"></Profil>
                </div>
            </div>


            <div className="connection">
                <div className="button">
                    <div className="left">
                        <Link exact to="/login">
                            <span>LOG IN</span>
                        </Link>
                    </div>
                    <div className="right">
                        <Link exact to="/register">
                            <span>REGISTER</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default accueil;