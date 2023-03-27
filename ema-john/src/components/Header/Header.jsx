import React from 'react';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className='h-20 bg-slate-800 '>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;