import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.querySelector('#app');

if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

console.log(`
▗▖ ▗▖▗▄▄▄▖    
▐▌ ▐▌  █      
▐▛▀▜▌  █      
▐▌ ▐▌▗▄█▄▖
`);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
