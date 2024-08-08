import { useState } from 'react';

import './Toggle.css';

// TODO: temporary button component - turn into SVG animation button to match graphics style
const Toggle = () => {
    const [theme, setTheme] = useState('theme-dark');

    const handleThemeChange = () => {
        if (theme === 'theme-dark') {
            setTheme('theme-light');
            document.documentElement.className = 'theme-light';
        } else {
            setTheme('theme-dark');
            document.documentElement.className = 'theme-dark';
        }
    };

    return (
        <button className='theme-toggle' onClick={handleThemeChange}>
            Dark/Light Mode
        </button>
    );
};

export default Toggle;
