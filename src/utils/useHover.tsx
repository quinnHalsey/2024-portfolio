import { useState } from 'react';

/**
 * Custom hook to manage hover state with a delay.
 *
 * This hook provides a way to track whether an element is hovered or not,
 * with a delay before setting the hovered state to `false` when the mouse leaves.
 *
 * @returns {Object} The hook returns an object with the following properties:
 * - `hovered` (boolean): A state variable that indicates whether the element is currently hovered.
 * - `handleMouseEnter` (function): A function to call when the mouse enters the element, which sets `hovered` to `true`.
 * - `handleMouseLeave` (function): A function to call when the mouse leaves the element, which sets `hovered` to `false` after a delay of 500ms.
 *
 * @example
 * const MyComponent = () => {
 *     const { hovered, handleMouseEnter, handleMouseLeave } = useHover();
 *
 *     return (
 *         <div
 *             onMouseEnter={handleMouseEnter}
 *             onMouseLeave={handleMouseLeave}
 *             style={{ backgroundColor: hovered ? 'yellow' : 'white' }}
 *         >
 *             Hover over me!
 *         </div>
 *     );
 * };
 */

interface UseHoverResult {
    hovered: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

const useHover = (): UseHoverResult => {
    const [hovered, setHovered] = useState<boolean>(false);

    let removeHoverTimeout: ReturnType<typeof setTimeout>;

    const handleMouseEnter = () => {
        setHovered(true);
        clearTimeout(removeHoverTimeout);
    };

    const handleMouseLeave = () => {
        removeHoverTimeout = setTimeout(() => {
            setHovered(false);
        }, 500);
    };

    return {
        hovered,
        handleMouseEnter,
        handleMouseLeave,
    };
};

export default useHover;
