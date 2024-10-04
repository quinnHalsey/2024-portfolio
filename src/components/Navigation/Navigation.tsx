import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProjectFromPath } from 'src/utils';

import NavButton from './NavButton';
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

    const handleCloseVideo = () => setVideoOpen(false);

    const handleThemeChange = () => {
        const newTheme = theme === 'theme-dark' ? 'theme-light' : 'theme-dark';
        setTheme(newTheme);
        document.documentElement.className = newTheme;
    };

    useEffect(() => {
        const currProj =
            location.pathname !== '/'
                ? getProjectFromPath(location.pathname)
                : null;
        setVideoSrc(currProj?.videoSrc || '');
        setVideoOpen(false);
    });

    return (
        <>
            {videoOpen && videoSrc && (
                <VideoLightbox src={videoSrc} onClose={handleCloseVideo} />
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

export default Navigation;
