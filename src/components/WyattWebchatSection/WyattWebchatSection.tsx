import { useState } from 'react';

import AnimateOnReveal from '../AnimateOnReveal';
import Container from 'src/components/Container';
import SectionHeader from 'src/components/SectionHeader';
import SectionLayout from 'src/components/SectionLayout';
import Typography from 'src/components/Typography';

import { Laptop, SpeechBubbles, WebchatUserGrowthChart } from 'src/graphics';

import { useScreenWidth } from 'src/utils';

import './WyattWebchatSection.css';

// TODO: Add blurb about the challenge of maintaining chat history across multiplate pages of an SSG site
// TODO: replace paragraphs 2/3 graphic with gif/video of chatbot screen recording

interface ParagraphData {
    graphic: React.ReactNode;
    text: React.ReactNode;
}

const WyattWebchatSection = () => {
    const visibilityThreshold = 0.7;
    const [currParagraph, setCurrParagraph] = useState<number>(0);
    const screenWidth = useScreenWidth();

    const handleVisibilityChange = (i: number) => (isVisible: boolean) => {
        if (isVisible) setCurrParagraph(i);
    };

    return (
        <SectionLayout paddingTop paddingBottom className='webchat-section'>
            <SectionHeader rightAlign>
                <Typography variant='h2'>
                    INCREASING CONVERSION RATE WITH A{' '}
                    <span className='highlight-p'>WEBCHAT WIDGET</span>
                </Typography>
            </SectionHeader>
            <Container flex className='webchat-container'>
                <div className='laptop__wrapper'>
                    <Laptop display={paragraphData[currParagraph].graphic} />
                </div>
                <div className='webchat-section__text'>
                    {paragraphData.map((data, i) =>
                        screenWidth > 640 ? (
                            <AnimateOnReveal
                                key={i}
                                className='webchat-section__paragraph-wrapper'
                                threshold={visibilityThreshold}
                                reverse
                                handleVisibilityChange={handleVisibilityChange(
                                    i
                                )}
                            >
                                <Typography variant='p'>{data.text}</Typography>
                            </AnimateOnReveal>
                        ) : (
                            <Typography key={i} variant='p'>
                                {data.text}
                            </Typography>
                        )
                    )}
                </div>
            </Container>
        </SectionLayout>
    );
};

const paragraphData: ParagraphData[] = [
    {
        graphic: <SpeechBubbles />,
        text: (
            <>
                Prior to the overhaul initiative, Wyatt consisted of a simple
                website and an SMS chatbot. During the later stages of the
                redesign, the Emerging Technology team advocated for the
                addition of an OpenAI-powered, web-based version of Wyatt. We
                initially implemented a third-party embedded widget, but
                encountered significant limitations in both design and
                functionality, including a limited ability to track usage.
            </>
        ),
    },
    {
        graphic: <SpeechBubbles />,
        text: (
            <>
                Working closely with the UI/UX team, we developed a fully
                branded, in-house solution that was eye-catching, accessible and
                user-friendly. We focused on designing an intuitive interface
                that would encourage user interaction while maintaining a sleek
                appearance that was well-aligned with Wyatt's brand identity.
            </>
        ),
    },
    {
        graphic: <SpeechBubbles />,
        text: (
            <>
                When implementing the new widget, I collaborated with the AI
                engineer to seamlessly integrate it with our middleware
                connecting the front-end to the OpenAI API. I integrated Google
                Analytics 4 (GA4), sending event data for comprehensive usage
                tracking, providing critical information for our product team to
                analyze and optimize user engagement.
            </>
        ),
    },
    {
        graphic: <WebchatUserGrowthChart />,
        text: (
            <>
                The outcome of our cross-functional collaboration was
                remarkable. The new widget not only enhanced the user experience
                but also significantly increased user engagement. We witnessed{' '}
                <strong>
                    a surge in webchat usage, with monthly active users
                    skyrocketing from 431 in March to 4,374 in May
                </strong>{' '}
                - a testament to the power of thoughtful and seamless design.
            </>
        ),
    },
];

export default WyattWebchatSection;
