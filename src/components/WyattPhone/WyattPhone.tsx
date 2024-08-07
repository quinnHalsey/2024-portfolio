import { PhoneSvg, WonkyWyatt } from 'src/graphics';

import './WyattPhone.css';

const WyattPhone = () => {
    return (
        <div className='phone-wrapper'>
            <PhoneSvg>
                <WonkyWyatt />
            </PhoneSvg>
        </div>
    );
};

export default WyattPhone;
