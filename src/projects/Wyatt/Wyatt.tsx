import PageLayout from 'src/components/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Container from 'src/components/Container';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';
import Quote from 'src/components/Quote';
import SquiggleDivider from 'src/components/SquiggleDivider';
import WyattPhone from 'src/components/WyattPhone';
import SectionHeader from 'src/components/SectionHeader';
import {
    CustomizableInteractiveText,
    ScalableInteractiveText,
} from 'src/components/InteractiveText';
import WyattWebchatSection from 'src/components/WyattWebchatSection';

import { CodeWindowSvg } from 'src/graphics';

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

export default Wyatt;
