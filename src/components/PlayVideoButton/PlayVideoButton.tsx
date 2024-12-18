import Typography from '../Typography';

import { PlayIcon } from 'src/graphics';

import './PlayVideoButton.css';

const PlayVideoButton = () => {
    return (
        <button className='play-video-button__wrapper'>
            <div className='play-video-button__content'>
                <Typography variant='p'>Watch project video</Typography>
                <div className='play-video-button__icon-wrapper'>
                    <PlayIcon />
                </div>
            </div>
        </button>
    );
};

export default PlayVideoButton;
