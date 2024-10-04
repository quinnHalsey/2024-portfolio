import { useEffect, useRef, useState } from 'react';

import LoadingAnimation from '../LoadingAnimation';

import './VideoLightbox.css';

//TODO: uncomment iframe - commented out for testing without third-party related errors

interface VideoLightboxProps {
    src: string;
    onClose: () => void;
}

const VideoLightbox = ({ src, onClose }: VideoLightboxProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && event.target === overlayRef.current) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleVideoLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className='video-lightbox__overlay' ref={overlayRef}>
            <div className='video-lightbox__wrapper'>
                {isLoading && (
                    <div className='video-lightbox__loading'>
                        <LoadingAnimation />
                    </div>
                )}
                <div
                    className={`video-lightbox ${!isLoading ? 'visible' : ''}`}
                >
                    {/* <iframe
                        allow='autoplay'
                        src={src}
                        width='100%'
                        height='100%'
                        allowFullScreen
                        onLoad={handleVideoLoad}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default VideoLightbox;
