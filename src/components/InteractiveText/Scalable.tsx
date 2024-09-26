import { useState } from 'react';
import { useHover } from 'src/utils';

//TODO: make themed SVG slider
const Scalable = () => {
    const { hovered, handleMouseEnter, handleMouseLeave } = useHover();

    const [fontSize, setFontSize] = useState(64);

    const handleScale = (size: number) => {
        setFontSize(size);
    };

    return (
        <div
            className='scalable-interactive__wrapper interactive-text'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className='highlight-b' style={{ fontSize: `${fontSize}px` }}>
                SCALABLE
            </span>
            ,
            <div className='scale-slider__wrapper'>
                <input
                    className={
                        'scale-slider interactive-text__control' +
                        (hovered ? ' visible' : '')
                    }
                    type='range'
                    onChange={(e) => handleScale(Number(e.target.value))}
                    max={82}
                    min={64}
                    value={fontSize}
                />
            </div>
        </div>
    );
};

export default Scalable;
