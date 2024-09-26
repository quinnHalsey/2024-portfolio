import { useState } from 'react';

import PageLayout from 'src/components/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Container from 'src/components/Container';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';
import Quote from 'src/components/Quote';
import SquiggleDivider from 'src/components/SquiggleDivider';
import WyattPhone from 'src/components/WyattPhone';
import SectionHeader from 'src/components/SectionHeader';

import useHover from 'src/utils/useHover';

import { CodeWindowSvg, Laptop } from 'src/graphics';

import './Wyatt.css';

const Wyatt = () => {
    return (
        <PageLayout>
            <SectionLayout className='project-intro__section' flex>
                <div className='project-intro__wrapper'>
                    <div>
                        <Typography variant='h1'>Wyatt</Typography>
                        <Typography
                            variant='h2'
                            className='project-intro__subtitle'
                        >
                            An AI-powered Chatbot Helping Students Complete the
                            FAFSA
                        </Typography>
                    </div>
                    <IntroAccordions />
                </div>
                <div className='project-intro__right-col'>
                    <WyattPhone />
                </div>
            </SectionLayout>
            <SectionLayout paddingTop paddingBottom>
                <SectionHeader rightAlign>
                    <Typography variant='h2'>
                        INCREASING CONVERSION RATE WITH A{' '}
                        <span className='highlight-p'>WEBCHAT WIDGET</span>
                    </Typography>
                    <Container
                        flex
                        animateIn
                        alignItemsCenter
                        className='webchat-section'
                    >
                        <div className='laptop__wrapper'>
                            <Laptop />
                        </div>
                        <div>
                            <Typography variant='p'>
                                Prior to the overhaul initiative, Wyatt
                                consisted of a simple website and an SMS
                                chatbot. During the later stages of the
                                redesign, the Emerging Technology team advocated
                                for the addition of an OpenAI-powered, web-based
                                version of Wyatt. We initially implemented a
                                third-party embedded widget, but encountered
                                significant limitations in both design and
                                functionality, including the inability to track
                                usage.
                            </Typography>
                            <Typography variant='p'>
                                Working closely with the UI/UX team and AI
                                engineers, we developed a fully branded,
                                in-house solution that was eye-catching,
                                accessible and user-friendly. We focused on
                                designing an intuitive interface that would
                                encourage user interaction while maintaining a
                                sleek appearance that was well-aligned with
                                Wyatt's brand identity. When implementing{' '}
                                {/* TODO: add sentence about implementing the new widget with the AI engineer, connecting it to his middleware and utilizing platform integration/GA4 API for tracking - critical for product team */}
                            </Typography>
                            <Typography variant='p'>
                                The outcome of our cross-functional
                                collaboration was remarkable. The new widget not
                                only enhanced the user experience but also
                                significantly increased user engagement. We
                                observed{' '}
                                <strong>
                                    a staggering increase in webchat usage, from
                                    431 to 2,270 unique users per month
                                </strong>{' '}
                                - a testament to the power of thoughtful and
                                seamless design.
                            </Typography>
                        </div>
                    </Container>
                </SectionHeader>
            </SectionLayout>
            <SectionLayout>
                <Container animateIn>
                    <Quote attribution='Product Manager' direction='right'>
                        <Typography variant='blockquote'>
                            You have been so wonderful to work with -{' '}
                            <span className='highlight-u'>
                                organized, diplomatic, professional, and kind
                            </span>
                            . Thank you for all of the work you’ve done to
                            improve Wyatt and for your dedication to doing the
                            work well.
                        </Typography>
                    </Quote>
                </Container>
            </SectionLayout>
            <SquiggleDivider />
            <SectionLayout>
                <SectionHeader>
                    <Typography variant='h2'>
                        BUILDING A <ScalableInteractive />{' '}
                        <CustomizableInteractive /> OPT-IN FORM
                    </Typography>
                </SectionHeader>
                <Container
                    animateIn
                    flex
                    alignItemsCenter
                    className='opt-in__section'
                >
                    <div>
                        <Typography variant='p'>
                            One of the biggest challenges of the Wyatt project
                            was overhauling a simple legacy form to opt-in users
                            for SMS chatbot messages. The new form required
                            pagination, branching logic, and a newly branded UI.
                        </Typography>
                        <Typography variant='p'>
                            After the initial rebuild, I revisited the form
                            system design to add customization options, allowing
                            different questions for specific Wyatt customers,
                            such as the state of Louisiana.
                        </Typography>
                        <Typography variant='p'>
                            Once I created the scalable design, implementing new
                            customer homepages and forms could be done in a
                            matter of minutes.
                        </Typography>
                    </div>
                    <div>
                        <CodeWindowSvg />
                    </div>
                </Container>
            </SectionLayout>
            <SectionLayout paddingTop>
                <Container animateIn>
                    <Quote attribution='Manager Review, Q3 2023'>
                        <Typography variant='blockquote'>
                            This was a major undertaking on a seriously{' '}
                            <span className='highlight-y'>
                                compressed timeline
                            </span>
                            , requiring Halsey to build from scratch on a
                            completely separate platform from the main BDT site.
                            […] Halsey’s{' '}
                            <span className='highlight-p'>
                                performance under pressure
                            </span>{' '}
                            was stellar.
                        </Typography>
                    </Quote>
                </Container>
            </SectionLayout>
        </PageLayout>
    );
};

//TODO: make themed SVG slider
const ScalableInteractive = () => {
    const { hovered, handleMouseEnter, handleMouseLeave } = useHover();

    const [fontSize, setFontSize] = useState(64);

    const handleScale = (size: number) => {
        setFontSize(size);
    };

    return (
        <div
            className='scalable-interactive__wrapper interactive-text'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className='highlight-b' style={{ fontSize: `${fontSize}px` }}>
                SCALABLE
            </span>
            ,
            <div className='scale-slider__wrapper'>
                <input
                    className={
                        'scale-slider interactive-text__control' +
                        (hovered ? ' visible' : '')
                    }
                    type='range'
                    onChange={(e) => handleScale(Number(e.target.value))}
                    max={82}
                    min={64}
                    value={fontSize}
                />
            </div>
        </div>
    );
};

//TODO: replace with themed SVG color picker
const CustomizableInteractive = () => {
    const { hovered, handleMouseEnter, handleMouseLeave } = useHover();

    const [fontColor, setFontColor] = useState<string>('#007bff');

    const isValidHexCode = (code: string): code is string => {
        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexPattern.test(code);
    };

    const handleColorChange = (hexCode: string) => {
        if (isValidHexCode(hexCode)) setFontColor(hexCode);
    };

    return (
        <div
            className='interactive-text'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className='highlight-b' style={{ color: `${fontColor}` }}>
                CUSTOMIZABLE
            </span>
            <input
                className={
                    'color-picker interactive-text__control' +
                    (hovered ? ' visible' : '')
                }
                type='color'
                onChange={(e) => handleColorChange(e.target.value)}
                value={fontColor}
            />
        </div>
    );
};

export default Wyatt;
