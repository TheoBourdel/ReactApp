import { Link } from 'react-router-dom'

import Form from "../components/Input-1.js"
import Button from "../components/Button";




const Register = () => {

    return (
        <section id="connection">
            <div className="statusbar"></div>
            <Link exact to="/" className="back"><i class="fas fa-chevron-left"></i></Link>
            <div className="connection-title"><h1>Register</h1></div>
            <Form value="jane@example.com" type="text"></Form>
            <Form value="123456789" type="password"></Form>
            <Link exact to="/Register-pseudo" className="button-1">
                <Button value="NEXT"></Button>
            </Link>
        </section>
    );
};

export default Register;