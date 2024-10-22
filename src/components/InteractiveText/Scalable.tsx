import { useState, useEffect } from 'react';
import { useHover, useScreenWidth } from 'src/utils';

//TODO: make themed SVG slider
const Scalable = () => {
    const { hovered, handleMouseEnter, handleMouseLeave } = useHover();
    const screenWidth = useScreenWidth();

    const getInitialFontSize = () => {
        if (screenWidth > 1024) return 64;
        if (screenWidth < 432) return 32;
        return 48;
    };

    const [fontSize, setFontSize] = useState(getInitialFontSize());

    useEffect(() => {
        setFontSize(getInitialFontSize());
    }, [screenWidth]);

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
                    aria-label='Adjust font size of "SCALABLE" text'
                />
            </div>
        </div>
    );
};

export default Scalable;
