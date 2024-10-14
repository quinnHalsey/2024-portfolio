import { useState } from 'react';
import { useHover } from 'src/utils';

//TODO: replace with themed SVG color picker
const Customizable = () => {
    const { hovered, handleMouseEnter, handleMouseLeave } = useHover();

    const [fontColor, setFontColor] = useState<string>('#007bff');

    const isValidHexCode = (code: string): code is string => {
        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexPattern.test(code);
    };

    const handleColorChange = (hexCode: string) => {
        if (isValidHexCode(hexCode)) setFontColor(hexCode);
    };

    return (
        <div
            className='interactive-text'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className='highlight-b' style={{ color: `${fontColor}` }}>
                CUSTOMIZABLE
            </span>
            <input
                className={
                    'color-picker interactive-text__control' +
                    (hovered ? ' visible' : '')
                }
                type='color'
                onChange={(e) => handleColorChange(e.target.value)}
                value={fontColor}
                aria-label='Change color of "CUSTOMIZABLE" text'
            />
        </div>
    );
};

export default Customizable;
