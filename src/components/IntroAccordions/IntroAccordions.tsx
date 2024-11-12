import { useState } from 'react';

import Typography from '../Typography';

import { Arrow } from '../../graphics';

import { AccordionItem } from 'src/types';

import './IntroAccordions.css';

const IntroAccordions = ({ items }: { items: AccordionItem[] }) => {
    const [openItem, setOpenItem] = useState(0);

    const toggleAccordion = (i: number) => {
        setOpenItem(i === openItem ? -1 : i);
    };

    return (
        <div className='accordion-section'>
            <div className='accordion-wrapper'>
                {items.map((item: AccordionItem, i: number) => {
                    const { title, description, highlight } = item;
                    const isOpen = i === openItem;
                    return (
                        <div
                            className={`accordion-item highlight-${highlight} ${
                                isOpen ? 'open' : ''
                            }`}
                            key={title}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    toggleAccordion(i);
                                }
                            }}
                        >
                            <div
                                className='accordion-title-wrapper'
                                onClick={() => toggleAccordion(i)}
                            >
                                <div>
                                    <Typography
                                        variant='h3'
                                        className='accordion-title'
                                    >
                                        {title}
                                    </Typography>
                                </div>
                                <div className='accordion-icon__wrapper'>
                                    <Arrow />
                                </div>
                            </div>
                            <div className='accordion-content'>
                                {description}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IntroAccordions;
