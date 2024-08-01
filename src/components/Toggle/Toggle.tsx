import { useState } from 'react';

import { setTheme } from 'src/utils/themes';

import './Toggle.css';

//TODO: temporary button component - turn into SVG animation button to match graphics style
const Toggle = () => {
    const handleThemeChange = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    };

    return (
        <button className='theme-toggle' onClick={handleThemeChange}>
            Dark/Light Mode
        </button>
    );
};

export default Toggle;
