import { useState } from 'react';

import Typography from '../Typography/Typography';

import { CodeFile } from 'src/types';

import './CodeWindow.css';

//TODO: refactor so that referenced files in the code samples can be clicked to change currFile

const CodeWindow = ({ files }: { files: CodeFile[] }) => {
    const [currFileIdx, setCurrFileIdx] = useState(0);

    const changeFile = (fileIdx: number) => {
        setCurrFileIdx(fileIdx);
    };

    const currFile = files[currFileIdx];

    return (
        <div className='code-window'>
            <div className='code-window__tab__container'>
                {files.map((file, i) => {
                    return (
                        <button
                            key={`${file.name}-${i}`}
                            className={`code-window__tab ${
                                i === currFileIdx ? 'active' : ''
                            }`}
                            onClick={() => changeFile(i)}
                            onMouseDown={() => changeFile(i)}
                        >
                            <Typography variant='p'>{file.name}</Typography>
                        </button>
                    );
                })}
            </div>
            <div className='code-inner-window'>{currFile.content}</div>
        </div>
    );
};

export default CodeWindow;
