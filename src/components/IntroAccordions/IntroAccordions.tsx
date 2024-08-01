import Typography from '../Typography';

import './IntroAccordions.css';

const IntroAccordions = () => {
    return (
        <div className='accordion-section'>
            <div className='accordion-wrapper'>
                <div className='accordion-item'>
                    <Typography
                        variant='h3'
                        className='accordion-title accordion-title__yellow'
                    >
                        The Project
                    </Typography>
                    <Typography variant='p' className='accordion-description'>
                        In the fall of 2023, my organization initiated an{' '}
                        <span className='accordion-description__highlight-y'>
                            overhaul and rebranding
                        </span>{' '}
                        of an existing AI tool, Wyatt. As the sole front-end
                        engineer on the project, I transformed a simple
                        informational website with a basic opt-in form into a{' '}
                        <span className='accordion-description__highlight-y'>
                            robust, branded site with effective CTAs leading to
                            a new form
                        </span>
                        , completing the rebuild in just one month. Following
                        the initial rebuild, the project continued for about
                        eight months as we implemented improvements and added
                        new features to expand our reach and provide customized
                        versions for partners.
                    </Typography>
                </div>
                <div className='accordion-item'>
                    <Typography variant='h3'>Key Deliverables</Typography>
                    <Typography variant='p' className='accordion-description'>
                        In the fall of 2023, my organization initiated an{' '}
                        <span className='accordion-description__highlight-y'>
                            overhaul and rebranding
                        </span>{' '}
                        of an existing AI tool, Wyatt. As the sole front-end
                        engineer on the project, I transformed a simple
                        informational website with a basic opt-in form into a{' '}
                        <span className='accordion-description__highlight-y'>
                            robust, branded site with effective CTAs leading to
                            a new form
                        </span>
                        , completing the rebuild in just one month. Following
                        the initial rebuild, the project continued for about
                        eight months as we implemented improvements and added
                        new features to expand our reach and provide customized
                        versions for partners.
                    </Typography>
                </div>
                <div className='accordion-item'>
                    <Typography variant='h3'>Technologies</Typography>
                    <Typography variant='p' className='accordion-description'>
                        In the fall of 2023, my organization initiated an{' '}
                        <span className='accordion-description__highlight-y'>
                            overhaul and rebranding
                        </span>{' '}
                        of an existing AI tool, Wyatt. As the sole front-end
                        engineer on the project, I transformed a simple
                        informational website with a basic opt-in form into a{' '}
                        <span className='accordion-description__highlight-y'>
                            robust, branded site with effective CTAs leading to
                            a new form
                        </span>
                        , completing the rebuild in just one month. Following
                        the initial rebuild, the project continued for about
                        eight months as we implemented improvements and added
                        new features to expand our reach and provide customized
                        versions for partners.
                    </Typography>
                </div>
            </div>
            <div className='project-intro__sections__underline' />
        </div>
    );
};

export default IntroAccordions;
