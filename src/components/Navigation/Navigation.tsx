import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Typography from '../Typography';

import { PlayIcon, HomeIcon, ToggleMoon, ToggleSun } from 'src/graphics';

import './Navigation.css';

//TODO: onClick callback function for Play Video
//TODO:  animation between sun/moon icons

const Navigation = () => {
    const navigate = useNavigate();

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
        <nav className='navigation-wrapper'>
            <ul>
                <NavButton
                    onClick={() => navigate('/')}
                    ariaLabel='Go to home page'
                    label='Home'
                >
                    <HomeIcon />
                </NavButton>
                <NavButton
                    onClick={() => console.log('clicked play button')}
                    ariaLabel='Play project video clip'
                    label='Play Video'
                >
                    <PlayIcon />
                </NavButton>
                <NavButton
                    onClick={handleThemeChange}
                    label='Theme'
                    ariaLabel='Change Theme'
                >
                    {theme === 'theme-dark' ? <ToggleSun /> : <ToggleMoon />}
                </NavButton>
            </ul>
        </nav>
    );
};

const NavButton = ({
    ariaLabel = '',
    children,
    label,
    onClick,
}: {
    ariaLabel?: string;
    children: React.ReactNode;
    label: string;
    onClick?: () => void;
}) => {
    return (
        <li className='nav-item__wrapper'>
            <button
                className='navigation-button'
                onClick={onClick}
                aria-label={ariaLabel}
            >
                {children}
                <div>
                    <Typography variant='p'>{label}</Typography>
                </div>
            </button>
        </li>
    );
};

export default Navigation;
