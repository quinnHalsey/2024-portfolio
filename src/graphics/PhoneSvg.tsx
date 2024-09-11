const PhoneSvg = ({ children }: { children?: React.ReactNode }) => {
    const strokeStyle = {
        strokeMiterlimit: 10,
        strokeWidth: '5px',
    };
    const inset = 2;
    return (
        <svg
            id='Phone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 933 1656'
        >
            <defs>
                <clipPath id='screenClip'>
                    <rect
                        x={28.5 + inset}
                        y={54.62 + inset}
                        width={877 - 2 * inset}
                        height={1547.06 - 2 * inset}
                        rx='51.06'
                        ry='51.06'
                    />
                </clipPath>
            </defs>
            <rect
                id='Outline'
                x='2.5'
                y='2.5'
                width='928'
                height='1651'
                rx='51.06'
                ry='51.06'
                style={strokeStyle}
            ></rect>
            <rect
                id='Screen'
                x='28.5'
                y='54.62'
                width='877'
                height='1547.06'
                rx='51.06'
                ry='51.06'
                style={strokeStyle}
            />
            <g clipPath='url(#screenClip)'>{children}</g>
        </svg>
    );
};

export default PhoneSvg;
