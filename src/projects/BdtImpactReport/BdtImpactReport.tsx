import PageLayout from 'src/components/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Container from 'src/components/Container';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';

import { useScreenWidth } from 'src/utils';

import { AccordionItem } from 'src/types';

import './BdtImpactReport.css';

//TODO: create project page and remove conditionals in Nav

const BdtImpactReport = () => {
    const screenWidth = useScreenWidth();

    const isSmallScreen = screenWidth <= 768;

    return (
        <PageLayout>
            <SectionLayout className='project-intro__section'>
                <Container flex>
                    <div className='project-intro__wrapper'>
                        <div>
                            <Typography variant='h1'>Impact Report</Typography>
                            <Typography
                                variant='h2'
                                className='project-intro__subtitle'
                            >
                                Immersive digital report for a non-profit "leaps
                                and bounds beyond" what the organization had
                                ever produced
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
                    In my recent role at the nonprofit Benefits Data Trust
                    (BDT), our team transformed the impact report from a static
                    PDF in 2023 to an interactive digital experience in 2024,
                    achieving a 206% increase in engagement. The 2024 report
                    showcased dynamic features like an interactive SVG map
                    highlighting BDT’s work across 14 U.S. states, a
                    horizontally scrolling timeline of a client’s journey, and a
                    visually engaging animated scroll experience throughout.
                </Typography>
                <Typography variant='p' className='accordion-description'>
                    I played a key role throughout the project lifecycle, from
                    providing input during content planning to collaborating in
                    the design phase to shape the UX and assess the technical
                    feasibility of ideas. As the sole developer, I completed the
                    entire build in just three weeks.
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
                        An interactive <strong>SVG map</strong> showcasing BDT’s
                        initiatives across 14 U.S. states, with clickable
                        regions for detailed insights.
                    </Typography>
                </li>
                <li>
                    <Typography variant='p'>
                        A horizontally scrolling <strong>timeline</strong>{' '}
                        illustrating a BDT client’s journey from initial contact
                        to benefits received.
                    </Typography>
                </li>
                <li>
                    <li>
                        <Typography variant='p'>
                            A <strong>responsive design</strong> that provided a
                            seamless experience across all devices, screen
                            sizes, and browsers.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='p'>
                            An <strong>accessible UX</strong>, including
                            alternative versions of highly interactive or visual
                            components, maintaining full compliance with WCAG
                            standards.
                        </Typography>
                    </li>
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
                        Interaction Observer API • SVGs • Forms
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

export default BdtImpactReport;
