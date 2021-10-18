import React from 'react';

import '../css/components/Button.css'

const Button = (props) => {
    return (
        <div className="button-1">
            <div className="submit">
                <span>{props.value}</span>
            </div>
        </div>
    );
};

export default Button;