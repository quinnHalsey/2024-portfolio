import { useNavigate } from 'react-router-dom';

import Toggle from '../Toggle';
import Typography from '../Typography';

import { PlayIcon, HomeIcon } from 'src/graphics';

import './Navigation.css';

//TODO: onClick callback function for Play Video

const Navigation = () => {
    const navigate = useNavigate();

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
                <li className='nav-item__wrapper'>
                    <Toggle />
                    <Typography variant='p'>Theme</Typography>
                </li>
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
            </button>
            <div>
                <Typography variant='p'>{label}</Typography>
            </div>
        </li>
    );
};

export default Navigation;
