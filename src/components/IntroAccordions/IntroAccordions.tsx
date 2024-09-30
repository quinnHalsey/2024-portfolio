import { useState } from 'react';
import Typography from '../Typography';

import './IntroAccordions.css';

interface accordionItem {
    title: string;
    highlight: 'y' | 'b' | 'p';
    description: JSX.Element;
}

const IntroAccordions = () => {
    const [openItem, setOpenItem] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenItem(index === openItem ? -1 : index);
    };

    return (
        <div className='accordion-section'>
            <div className='accordion-wrapper'>
                {items.map((item: accordionItem, index: number) => {
                    const { title, description, highlight } = item;
                    const isOpen = index === openItem;
                    console.log(isOpen, 'open', index, 'index');
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
                                    toggleAccordion(index);
                                }
                            }}
                        >
                            <div
                                className='accordion-title-wrapper'
                                onClick={() => toggleAccordion(index)}
                            >
                                <Typography
                                    variant='h3'
                                    className='accordion-title'
                                >
                                    {title}
                                </Typography>
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

const items: accordionItem[] = [
    {
        title: 'The Project',
        highlight: 'y',
        description: (
            <Typography variant='p' className='accordion-description'>
                In the fall of 2023, my organization initiated an{' '}
                <strong>overhaul and rebranding</strong> of an existing AI tool,
                Wyatt. As the sole front-end engineer on the project, I
                transformed a simple informational website with a basic opt-in
                form into a{' '}
                <strong>
                    robust, branded site with effective CTAs leading to a new
                    form
                </strong>
                , completing the rebuild in just one month. Following the
                initial rebuild, the project continued for about eight months as
                we implemented improvements and added new features to expand our
                reach and provide customized versions for partners.
            </Typography>
        ),
    },
    {
        title: 'Key Deliverables',
        highlight: 'b',
        description: (
            <ul className='accordion-description'>
                <li>
                    <Typography variant='p'>
                        An informative <strong>landing page</strong> that
                        introduces Wyatt and its capabilities.
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        <strong>Secondary pages</strong> (3) provided further
                        information, the terms of use, and a repository of
                        downloadable tools.
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        An integrated <strong>opt-in form</strong> allowing
                        users to sign up for SMS updates from Wyatt.
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        A new <strong>chatbot widget</strong> that contributed
                        to a <strong>426.68% increase in conversions</strong>.
                    </Typography>
                </li>
            </ul>
        ),
    },
    {
        title: 'Technologies',
        highlight: 'p',
        description: (
            <ul className='accordion-description'>
                <li>
                    <Typography variant='p'>
                        <strong>Codebase:</strong> JavaScript • React • Gatsby •
                        Webpack • Babel • Node.js • OpenAI API
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        <strong>Tools:</strong> Netlify • Browserstack • Google
                        Analytics 4 • Hotjar
                    </Typography>
                </li>
            </ul>
        ),
    },
];

export default IntroAccordions;
