import SectionLayout from '../SectionLayout';

import { Squiggle } from 'src/graphics';

import './SquiggleDivider.css';

const SquiggleDivider = () => {
    const [isVisible, setIsVisible] = useState(false);
    const drawRef = useRef(null);

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

        if (drawRef.current) {
            observer.observe(drawRef.current);
        }

        return () => {
            if (drawRef.current) {
                observer.unobserve(drawRef.current);
            }
        };
    }, [drawRef]);

    return (
        <SectionLayout>
            <div className='squiggle-divider__wrapper' ref={drawRef}>
                <Squiggle animate={isVisible} />
            </div>
        </SectionLayout>
    );
};

export default SquiggleDivider;

import React, { useEffect, useRef, useState } from 'react';
