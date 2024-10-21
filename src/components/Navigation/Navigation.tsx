import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProjectFromPath } from 'src/utils';
import { useTheme } from 'src/contexts/ThemeContext';

import NavButton from './NavButton';
import VideoLightbox from '../VideoLightbox';

import {
    PlayIcon,
    HomeIcon,
    ToggleMoon,
    ToggleSun,
    DownloadIcon,
    LinkedInIcon,
} from 'src/graphics';

import './Navigation.css';

//TODO:  animation between sun/moon icons

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { theme, setTheme } = useTheme();

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

        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            {videoOpen && videoSrc && (
                <VideoLightbox src={videoSrc} onClose={handleCloseVideo} />
            )}
            <nav className='navigation-wrapper'>
                <ul>
                    {videoSrc && (
                        <>
                            <NavButton
                                onClick={() => setVideoOpen(!videoOpen)}
                                ariaLabel='Open project video clip'
                                label='View Video'
                            >
                                <PlayIcon />
                            </NavButton>
                            <div
                                className='navigation__divider-line'
                                aria-hidden
                            />
                        </>
                    )}
                    <NavButton
                        onClick={() => navigate('/')}
                        ariaLabel='Go to home page'
                        label='Home'
                    >
                        <HomeIcon />
                    </NavButton>
                    <NavButton
                        href='/Halsey-Quinn_Resume-2024_4.1.pdf'
                        label='Resume'
                        ariaLabel='Download Resume'
                    >
                        <DownloadIcon />
                    </NavButton>
                    <NavButton
                        href='https://www.linkedin.com/in/halseyq/'
                        label='LinkedIn'
                        ariaLabel='Go to LinkedIn profile'
                    >
                        <LinkedInIcon />
                    </NavButton>
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
