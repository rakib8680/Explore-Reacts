import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary mt-7">{children}</button>
        </div>
    );
};

export default Button;