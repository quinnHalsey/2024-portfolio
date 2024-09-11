import { useState } from 'react';

import { ToggleMoon, ToggleSun } from 'src/graphics';

import './Toggle.css';

//TODO:  animation between sun/moon icons

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
            {theme === 'theme-dark' ? <ToggleSun /> : <ToggleMoon />}
        </button>
    );
};

export default Toggle;
