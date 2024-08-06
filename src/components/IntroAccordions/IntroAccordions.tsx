import Typography from '../Typography';

import './IntroAccordions.css';

const IntroAccordions = () => {
    return (
        <div className='accordion-section'>
            <div className='accordion-wrapper'>
                <div className='accordion-item highlight-y'>
                    <Typography variant='h3' className='accordion-title'>
                        The Project
                    </Typography>
                    <Typography variant='p' className='accordion-description'>
                        In the fall of 2023, my organization initiated an{' '}
                        <strong>overhaul and rebranding</strong> of an existing
                        AI tool, Wyatt. As the sole front-end engineer on the
                        project, I transformed a simple informational website
                        with a basic opt-in form into a{' '}
                        <strong>
                            robust, branded site with effective CTAs leading to
                            a new form
                        </strong>
                        , completing the rebuild in just one month. Following
                        the initial rebuild, the project continued for about
                        eight months as we implemented improvements and added
                        new features to expand our reach and provide customized
                        versions for partners.
                    </Typography>
                </div>
                <div className='accordion-item highlight-b'>
                    <Typography variant='h3' className='accordion-title'>
                        Key Deliverables
                    </Typography>
                    <div className='dynamic-underline' />
                    <ul className='accordion-description'>
                        <li>
                            <Typography variant='p'>
                                An informative <strong>landing page</strong>{' '}
                                that introduces Wyatt and its capabilities.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='p'>
                                <strong>Secondary pages</strong> (3) provided
                                further information, the terms of use, and a
                                repository of downloadable tools.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='p'>
                                An integrated <strong>opt-in form</strong>{' '}
                                allowing users to sign up for SMS updates from
                                Wyatt.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='p'>
                                A new <strong>chatbot widget</strong> that
                                contributed to a{' '}
                                <strong>426.68% increase in conversions</strong>
                                .
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className='accordion-item highlight-p'>
                    <Typography variant='h3' className='accordion-title'>
                        Technologies
                    </Typography>
                    <ul className='accordion-description'>
                        <li>
                            <Typography variant='p'>
                                <strong>Codebase:</strong> JavaScript • React •
                                Gatsby • Webpack • Babel • Node.js • OpenAI API
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='p'>
                                <strong>DevOps:</strong> Netlify • Browserstack
                                • Google Analytics 4 • Hotjar
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='project-intro__sections__underline' />
        </div>
    );
};

export default IntroAccordions;
