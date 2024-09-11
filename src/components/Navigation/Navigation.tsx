import { PlayIcon, HomeIcon } from 'src/graphics';
import Toggle from '../Toggle';

import './Navigation.css';

//TODO: onClick callback functions for Home and Play Video

const Navigation = () => {
    return (
        <nav className='navigation-wrapper'>
            <NavButton
                onClick={() => console.log('clicked home button')}
                ariaLabel='Go to home page'
            >
                <HomeIcon />
            </NavButton>
            <NavButton
                onClick={() => console.log('clicked play button')}
                ariaLabel='Play project video clip'
            >
                <PlayIcon />
            </NavButton>
            <Toggle />
        </nav>
    );
};

const NavButton = ({
    ariaLabel = '',
    children,
    onClick,
}: {
    ariaLabel?: string;
    children: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <button
            className='navigation-button'
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Navigation;
