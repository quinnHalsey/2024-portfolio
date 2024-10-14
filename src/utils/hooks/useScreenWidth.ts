import { useEffect, useState } from 'react';

/**
 * Custom hook to get and track the current screen width.
 *
 * This hook provides a way to access the current screen width and automatically
 * updates when the window is resized. It uses the browser's `window.innerWidth`
 * property and listens for the 'resize' event to keep the value up-to-date.
 *
 * @returns {number} The current screen width in pixels. Returns 0 if `window` is undefined.
 *
 * @example
 * const MyComponent = () => {
 *     const screenWidth = useScreenWidth();
 *
 *     return (
 *         <div>
 *             Current screen width: {screenWidth}px
 *         </div>
 *     );
 * };
 */

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenWidth;
};

export default useScreenWidth;
