import { useScreenWidth } from 'src/utils';

import PageLayout from 'src/components/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Container from 'src/components/Container';
import Typography from 'src/components/Typography';
import SectionHeader from 'src/components/SectionHeader';
import Quote from 'src/components/Quote';
import IntroAccordions from 'src/components/IntroAccordions';
import SquiggleDivider from 'src/components/SquiggleDivider';
import WyattPhone from 'src/components/WyattPhone';
import WyattWebchatSection from 'src/components/WyattWebchatSection';
import CodeWindow from 'src/components/CodeWindow';
import {
    CustomizableInteractiveText,
    ScalableInteractiveText,
} from 'src/components/InteractiveText';
import {
    stepOneCode,
    questionNameCode,
    formGroupTextCode,
} from './WyattCodeSamples';

import { CodeFile } from 'src/utils/constants';

import './Wyatt.css';

const Wyatt = () => {
    const screenWidth = useScreenWidth();

    const isSmallScreen = screenWidth <= 768;

    return (
        <PageLayout>
            <SectionLayout className='project-intro__section'>
                <Container flex>
                    <div className='project-intro__wrapper'>
                        <div>
                            <Typography variant='h1'>Wyatt</Typography>
                            <Typography
                                variant='h2'
                                className='project-intro__subtitle'
                            >
                                An AI-powered Chatbot Helping Students Complete
                                the FAFSA
                            </Typography>
                        </div>
                        {!isSmallScreen && <IntroAccordions />}
                    </div>
                    <div className='project-intro__right-col'>
                        <WyattPhone />
                    </div>
                </Container>
                {isSmallScreen && (
                    <Container>
                        <IntroAccordions />
                    </Container>
                )}
            </SectionLayout>

            <WyattWebchatSection />
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
                        BUILDING A <ScalableInteractiveText />{' '}
                        <CustomizableInteractiveText /> OPT-IN FORM
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
                    <div className='wyatt__code-window__wrapper'>
                        <CodeWindow files={codeFiles} />
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

const codeFiles: CodeFile[] = [
    {
        name: 'StepOne.js',
        content: stepOneCode,
    },
    { name: 'QuestionName.js', content: questionNameCode },
    { name: 'FormGroupText.js', content: formGroupTextCode },
];

export default Wyatt;
