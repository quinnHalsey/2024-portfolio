import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProjectFromPath } from 'src/utils';

import Typography from '../Typography';
import VideoLightbox from '../VideoLightbox';

import { PlayIcon, HomeIcon, ToggleMoon, ToggleSun } from 'src/graphics';

import './Navigation.css';

//TODO:  animation between sun/moon icons

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [theme, setTheme] = useState('theme-dark');
    const [videoOpen, setVideoOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const handleThemeChange = () => {
        if (theme === 'theme-dark') {
            setTheme('theme-light');
            document.documentElement.className = 'theme-light';
        } else {
            setTheme('theme-dark');
            document.documentElement.className = 'theme-dark';
        }
    };

    useEffect(() => {
        if (location.pathname !== '/') {
            const currProj = getProjectFromPath(location.pathname);
            if (currProj?.videoSrc) {
                setVideoSrc(currProj.videoSrc);
            }
        } else {
            // If user is on homepage
            setVideoSrc('');
            setVideoOpen(false);
        }
    }, [location.pathname]);

    return (
        <>
            {videoOpen && videoSrc?.length > 0 && (
                <VideoLightbox src={videoSrc} />
            )}
            <nav className='navigation-wrapper'>
                <ul>
                    <NavButton
                        onClick={() => navigate('/')}
                        ariaLabel='Go to home page'
                        label='Home'
                    >
                        <HomeIcon />
                    </NavButton>
                    {videoSrc && (
                        <NavButton
                            onClick={() => setVideoOpen(!videoOpen)}
                            ariaLabel='Open project video clip'
                            label='View Video'
                        >
                            <PlayIcon />
                        </NavButton>
                    )}
                    <NavButton
                        onClick={handleThemeChange}
                        label='Theme'
                        ariaLabel='Change Theme'
                    >
                        {theme === 'theme-dark' ? (
                            <ToggleSun />
                        ) : (
                            <ToggleMoon />
                        )}
                    </NavButton>
                </ul>
            </nav>
        </>
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
