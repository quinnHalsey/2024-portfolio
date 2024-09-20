import './VideoLightbox.css';

const VideoLightbox = ({ src }: { src: string }) => {
    return (
        <div className='video-lightbox__overlay'>
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
