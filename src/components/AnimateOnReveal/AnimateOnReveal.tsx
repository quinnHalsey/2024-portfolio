import { useEffect, useRef, useState } from 'react';

const AnimateOnReveal = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const animateRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
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
        <div ref={animateRef} className={isVisible ? 'visible' : ''}>
            {children}
        </div>
    );
};

export default AnimateOnReveal;
