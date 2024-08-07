import { useState } from 'react';

import { mobileGetFafsaHelp, PhoneSvg, WonkyWyatt } from 'src/graphics';

import './WyattPhone.css';

const WyattPhone = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`phone-wrapper ${isHovered ? 'hovered' : ''}`}
            tabIndex={0}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            <PhoneSvg>
                {/* Toggling between the images handled with CSS opacity transition  */}
                <image
                    href={mobileGetFafsaHelp}
                    className='wyatt-phone__true-image'
                />
                <WonkyWyatt />
            </PhoneSvg>
        </div>
    );
};

export default WyattPhone;
