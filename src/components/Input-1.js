import React from 'react';
import '../css/components/Input-1.css';



const form = (props)  => {
   
    return (
        <div className="input-1">
            <form className="contact-form">
                    <input
                        className="text"
                        type={props.type}
                        id="email"
                        name="email"
                        placeholder={props.placeholder}
                        value={props.value}
                        autoComplete="off"
                    />
            </form>
        </div>
    );
};

export default form;