import { useEffect, useState, type JSX } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProjectFromPath } from '../../utils';
import { useTheme } from '../../contexts/ThemeContext';

import NavButton from './NavButton';
import VideoLightbox from '../VideoLightbox';
import MobileNavigation from './MobileNavigation';

import {
    PlayIcon,
    HomeIcon,
    ToggleMoon,
    ToggleSun,
    DownloadIcon,
    LinkedInIcon,
    GithubIcon,
} from '../../graphics';

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

    const tabNavItems: JSX.Element[] = [
        <NavButton
            onClick={() => navigate('/')}
            ariaLabel='Go to home page'
            label='Home'
            variant='tab'
        >
            <HomeIcon />
        </NavButton>,
        <NavButton
            onClick={handleThemeChange}
            label='Theme'
            ariaLabel='Change Theme'
            variant='tab'
        >
            {theme === 'theme-dark' ? <ToggleSun /> : <ToggleMoon />}
        </NavButton>,
    ];

    const navItems: JSX.Element[] = [
        <>
            {videoSrc && (
                <>
                    <NavButton
                        onClick={() => setVideoOpen(!videoOpen)}
                        ariaLabel='Open project video clip'
                        label='View Video'
                    >
                        <PlayIcon />
                    </NavButton>
                </>
            )}
        </>,
        <NavButton
            href='/Halsey-Quinn_Resume_Frontend-Developer.pdf'
            label='Resume'
            ariaLabel='Download Resume'
        >
            <DownloadIcon />
        </NavButton>,
        <NavButton
            href='https://github.com/quinnHalsey'
            label='GitHub'
            ariaLabel='Go to GitHub profile'
        >
            <GithubIcon />
        </NavButton>,
        <NavButton
            href='https://www.linkedin.com/in/halseyq/'
            label='LinkedIn'
            ariaLabel='Go to LinkedIn profile'
        >
            <LinkedInIcon />
        </NavButton>,
    ];

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
            <MobileNavigation navItems={tabNavItems.concat(navItems)} />
            <nav className='navigation-wrapper desktop__navigation-wrapper'>
                <ul className='navigation-tabs'>
                    {tabNavItems.map((item, i) => {
                        return (
                            <li className='nav-item__wrapper' key={i}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {navItems.map((item, i) => {
                        return (
                            <li className='nav-item__wrapper' key={i}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
