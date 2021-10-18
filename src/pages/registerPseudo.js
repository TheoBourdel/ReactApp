import { Link } from 'react-router-dom'

import Input from "../components/Input-1.js"
import Button from "../components/Button";




const pseudo = () => {
    return (
        <section id="connection">
            <div className="statusbar"></div>
            <Link exact to="/" className="back"><i class="fas fa-chevron-left"></i></Link>
            <div className="connection-title"><h1>Register</h1></div>
            <Input value="the_jane" type="text"></Input>
            <Link exact to="/discover" className="button-1">
                <Button value="SIGN UP"></Button>
            </Link>
            <div className="privacy"><p>By signing up, you agree to Photo's <span>Terms of Service</span> and <span>Privacy Policy</span></p></div>
        </section>
    );
};

export default pseudo;