import { Link } from 'react-router-dom'

import Form from "../components/Input-1.js"
import Button from "../components/Button";




const login = () => {

    return (
        <section id="connection">
            <div className="statusbar"></div>
            <Link exact to="/" className="back"><i class="fas fa-chevron-left"></i></Link>
            <div className="connection-title"><h1>Log in</h1></div>
            <Form value="jane@example.com" type="mail"></Form>
            <Form value="123456789" type="password"></Form>
            <Link exact to="/discover" className="button-1">
                <Button value="LOG IN"></Button>
            </Link>

        </section>
    );
};

export default login;