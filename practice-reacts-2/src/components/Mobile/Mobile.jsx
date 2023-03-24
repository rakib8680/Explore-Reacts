import React, { useState } from 'react';
import './Mobile.css'



const Mobile = () => {
    const [value, setValue] = useState(100)
    const batteryDown = () => {
        if (value > 0) {
            return setValue(value - 10)
        }
    }


    return (
        <div>
            <h2>{value}</h2>
            <button className='battery' onClick={batteryDown}>battery down</button>
        </div>
    );
};

export default Mobile;