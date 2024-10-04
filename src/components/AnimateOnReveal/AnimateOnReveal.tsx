import { useEffect, useRef, useState } from 'react';

interface AnimateOnRevealProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    reverse?: boolean;
    handleVisibilityChange?: (isVisible: boolean) => void;
}

const AnimateOnReveal = ({
    children,
    className = '',
    threshold = 1,
    reverse = false,
    handleVisibilityChange,
}: AnimateOnRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const animateRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (reverse) {
                    setIsVisible(entry.isIntersecting);
                    handleVisibilityChange?.(entry.isIntersecting);
                } else if (entry.isIntersecting) {
                    setIsVisible(true);
                    handleVisibilityChange?.(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: threshold,
            }
        );

        if (animateRef.current) {
            observer.observe(animateRef.current);
        }

        return () => {
            if (animateRef.current) {
                observer.unobserve(animateRef.current);
            }
        };
    }, [animateRef]);

    return (
        <div
            ref={animateRef}
            className={`${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimateOnReveal;
