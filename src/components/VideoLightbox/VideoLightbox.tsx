import { useEffect, useRef } from 'react';

import './VideoLightbox.css';

interface VideoLightboxProps {
    src: string;
    onClose: () => void;
}

const VideoLightbox = ({ src, onClose }: VideoLightboxProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);

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

    return (
        <div className='video-lightbox__overlay' ref={overlayRef}>
            <div className='video-lightbox__wrapper'>
                <div className='video-lightbox'>
                    <iframe
                        allow='autoplay'
                        src={src}
                        width='100%'
                        height='100%'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoLightbox;
