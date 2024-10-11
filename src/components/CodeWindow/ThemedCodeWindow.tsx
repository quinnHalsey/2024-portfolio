import Typography from '../Typography/Typography';

// import './CodeWindow.css';

// TODO: ------------- UNUSED COMPONENT ------------------
// TODO: complete and explore responsivity

// .code-window {
//     position: relative;
//     height: 698px;
//     width: 774px;
// }

// svg.code-window__svg-defs {
//     height: 0px;
//     width: 0px;
//     stroke-width: 1px;
// }

// .code-window::before,
// .code-window::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     transition: background-color 0.75s ease;
//     clip-path: url(#code-window-clip);
// }

// .code-window::before {
//     background-color: var(--color-bg);
//     z-index: 1;
//     transform: scale(0.99);
// }

// .code-window::after {
//     background-color: var(--color-fg); /* Border color */
// }

// .code-window > div {
//     position: relative;
//     z-index: 2;
// }

// .code-window {
//     display: flex;
//     flex-direction: column;
// }

// .code-window__content {
//     margin: 0 24px 24px;
//     z-index: 2;
// }

// .code-window__tab__container {
//     padding: 36px 24px 24px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 16px;
//     z-index: 2;
// }

// .code-window__tab {
//     padding: 16px;
//     width: 200px;
//     text-align: center;
//     border: 3px solid var(--color-fg);
//     border-radius: 64px;
//     cursor: pointer;
// }

// .code-window__content p,
// .code-window__tab p {
//     font-family: monospace;
// }

const CodeWindow = () => {
    return (
        <>
            <svg className='code-window__svg-defs'>
                <defs>
                    <clipPath id='code-window-clip'>
                        <path d='M769.62,140.89c0,18,.72,18,.72,36.01s-1.08,18-1.08,36,.17,18,.17,36.01c0,18-.1,18-.1,36.01,0,18-.58,18-.58,36.01,0,18,1.13,18,1.13,36.01,0,18,.38,18,.38,36,0,18,.14,18,.14,36s-1.07,18-1.07,36.01.39,18,.39,36.01.11,18.01.11,36.01c0,18-1.17,18-1.17,36.01,0,18.01,1.78,18.01,1.78,36.01s-.72,18.01-.72,36.01c0,13.6-6.25,25.44-15.16,34.35s-20.76,14.88-34.35,14.88c-17.56,0-17.56.22-35.13.22-17.56,0-17.56.58-35.13.58s-17.57-1.14-35.13-1.14-17.57.71-35.13.71c-17.57,0-17.57.34-35.13.34-17.57,0-17.57-.9-35.13-.9-17.57,0-17.57-.8-35.13-.8s-17.57.33-35.13.33-17.57.1-35.13.1c-17.57,0-17.57,1.43-35.13,1.43s-17.57-1.19-35.14-1.19c-17.56,0-17.56.1-35.13.1s-17.57-.23-35.13-.23-17.57,1.23-35.13,1.23c-17.57,0-17.57-.27-35.14-.27-17.57,0-17.57-.11-35.14-.11-17.57,0-17.57-.23-35.14-.23s-17.57-.06-35.14-.06-17.57-.25-35.14-.25c-13.6,0-25.57-5.7-34.48-14.61s-14.77-20.88-14.77-34.48c0-18.52-.51-18.52-.51-37.03,0-18.51.13-18.51.13-37.03s1.32-18.52,1.32-37.03c0-18.52-.94-18.52-.94-37.03,0-18.52-.13-18.52-.13-37.03s.63-18.52.63-37.03c0-18.52-.97-18.52-.97-37.03s1.05-18.52,1.05-37.03-1.4-18.52-1.4-37.03.76-18.51.76-37.03-.86-18.52-.86-37.03c0-18.52.33-18.52.33-37.03q0-18.52,0-37.04c0-18.52,1.07-18.52,1.07-37.03s-.12-18.52-.12-37.04-1.06-18.52-1.06-37.04c0-13.6,6.83-25.31,15.74-34.22S39.07,3.18,52.67,3.18c17.56,0,17.56-.68,35.13-.68s17.56.75,35.13.75,17.57.46,35.13.46,17.57.16,35.13.16,17.57-.54,35.13-.54,17.57-.43,35.13-.43,17.57.24,35.13.24,17.57.56,35.13.56,17.57-.66,35.13-.66,17.57,0,35.13,0,17.57.36,35.14.36,17.56.81,35.13.81,17.57-.65,35.13-.65,17.57.2,35.13.2,17.57.47,35.14.47,17.57-.16,35.14-.16,17.57-.83,35.14-.83,17.57-.14,35.14-.14,17.57-.09,35.14-.09c13.6,0,26.37,5.26,35.28,14.17,8.91,8.91,13.24,21.69,13.24,35.28,0,22.11,1.35,22.11,1.35,44.21s-.58,22.11-.58,44.21' />
                    </clipPath>
                </defs>
            </svg>
            <div className='code-window'>
                <div className='code-window__tab__container'>
                    <div className='code-window__tab'>
                        <Typography variant='p'>StudentSchema.js</Typography>
                    </div>
                    <div className='code-window__tab'>
                        <Typography variant='p'>StudentSchema.js</Typography>
                    </div>
                </div>
                <div className='code-inner-window'>
                    <div className='code-window__content'>
                        <Typography variant='h2'>Code</Typography>
                        <Typography variant='p'>TEST TEST TEST </Typography>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CodeWindow;
