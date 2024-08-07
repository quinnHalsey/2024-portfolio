const Phone = () => {
    const strokeStyle = {
        strokeMiterlimit: 10,
        strokeWidth: '5px',
    };
    return (
        <svg
            id='Phone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 933 1656'
        >
            <rect
                id='Screen'
                x='2.5'
                y='2.5'
                width='928'
                height='1651'
                rx='51.06'
                ry='51.06'
                style={strokeStyle}
            />
            <rect
                id='Outline'
                x='28.5'
                y='54.62'
                width='877'
                height='1547.06'
                rx='51.06'
                ry='51.06'
                style={strokeStyle}
            />
        </svg>
    );
};

export default Phone;
