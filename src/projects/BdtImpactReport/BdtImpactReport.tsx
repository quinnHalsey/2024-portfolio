import PageLayout from 'src/components/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Container from 'src/components/Container';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';

import { useScreenWidth } from 'src/utils';

import { AccordionItem } from 'src/types';

import './BdtImpactReport.css';

const BdtImpactReport = () => {
    const screenWidth = useScreenWidth();

    const isSmallScreen = screenWidth <= 768;

    return (
        <PageLayout>
            <SectionLayout className='project-intro__section impact__project-intro'>
                <Container flex>
                    <div className='project-intro__wrapper'>
                        <div>
                            <Typography variant='h1'>Impact Report</Typography>
                            <Typography
                                variant='h2'
                                className='project-intro__subtitle'
                            >
                                An immersive, engaging digital report showcasing
                                a non-profit's impact
                            </Typography>
                        </div>
                        {!isSmallScreen && (
                            <IntroAccordions items={accordionItems} />
                        )}
                    </div>
                    <div className='project-intro__right-col'></div>
                </Container>
                {isSmallScreen && (
                    <Container>
                        <IntroAccordions items={accordionItems} />
                    </Container>
                )}
            </SectionLayout>
        </PageLayout>
    );
};

const accordionItems: AccordionItem[] = [
    {
        title: 'The Project',
        highlight: 'y',
        description: (
            <>
                <Typography variant='p' className='accordion-description'>
                    In my recent role at nonprofit Benefits Data Trust (BDT),
                    our team reimagined the non-profit's impact report. While
                    2023's report was a static PDF, we created an{' '}
                    <strong>interactive digital experience</strong> for 2024,
                    achieving a <strong>206% increase in engagement</strong>.
                    This year's report showcased dynamic features like a
                    clickable SVG map, a horizontally scrolling timeline of a
                    client’s journey, and a visually engaging animated scroll
                    experience throughout.
                </Typography>
                <Typography variant='p' className='accordion-description'>
                    I played a key role throughout the project lifecycle, from
                    providing input during content planning to collaborating in
                    the design phase to shape the UX and assess the technical
                    feasibility of ideas. As the sole developer, I completed the
                    entire build in just three weeks. The final product exceeded
                    stakeholder expectations with one describing it as "{' '}
                    <strong>
                        leaps and bounds beyond anything [BDT had] produced for
                        the donor market before{' '}
                    </strong>
                    ."
                </Typography>
            </>
        ),
    },
    {
        title: 'Key Deliverables',
        highlight: 'b',
        description: (
            <ul className='accordion-description'>
                <li>
                    <Typography variant='p'>
                        An <strong>interactive SVG map</strong> showcasing BDT’s
                        initiatives across 14 U.S. states, with clickable
                        regions for detailed insights.
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        A horizontally scrolling{' '}
                        <strong>
                            timeline illustrating a BDT client’s journey
                        </strong>{' '}
                        from initial contact to benefits received.
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        <strong>Responsive and accessible design</strong>{' '}
                        ensuring a seamless experience across all devices,
                        screen sizes, and browsers, with mobile-optimized
                        alternatives for highly-interactive components.
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
                        <strong>Codebase:</strong> JavaScript • React •
                        Interaction Observer API • Hubspot API • SVG • Lottie{' '}
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        <strong>Tools:</strong> Netlify • Browserstack • Google
                        Analytics 4
                    </Typography>
                </li>
            </ul>
        ),
    },
];

export default BdtImpactReport;
