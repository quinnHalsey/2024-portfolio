import PageLayout from 'src/components/PageLayout/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Container from 'src/components/Container';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';
import Quote from 'src/components/Quote';
import SquiggleDivider from 'src/components/SquiggleDivider';
import WyattPhone from 'src/components/WyattPhone';
import SectionHeader from 'src/components/SectionHeader';

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
                </SectionHeader>
                <Container flex>
                    <div className='laptop__wrapper'>
                        <Laptop />
                    </div>
                </Container>
            </SectionLayout>
            <SectionLayout>
                <Quote attribution='Product Manager' direction='right'>
                    <Typography variant='blockquote'>
                        You have been so wonderful to work with -{' '}
                        <span className='highlight-u'>
                            organized, diplomatic, professional, and kind
                        </span>
                        . Thank you for all of the work you’ve done to improve
                        Wyatt and for your dedication to doing the work well.
                    </Typography>
                </Quote>
            </SectionLayout>
            <SquiggleDivider />
            <SectionLayout>
                <SectionHeader>
                    <Typography variant='h2'>
                        BUILDING A <span className='highlight-b'>SCALABLE</span>
                        , <span className='highlight-b'>CUSTOMIZABLE</span>{' '}
                        OPT-IN FORM
                    </Typography>
                </SectionHeader>
                <Container flex alignItemsCenter className='opt-in__section'>
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
            <SectionLayout paddingTop paddingBottom>
                <Quote attribution='Manager Review, Q3 2023'>
                    <Typography variant='blockquote'>
                        This was a major undertaking on a seriously{' '}
                        <span className='highlight-y'>compressed timeline</span>
                        , requiring Halsey to build from scratch on a completely
                        separate platform from the main BDT site. […] Halsey’s{' '}
                        <span className='highlight-p'>
                            performance under pressure
                        </span>{' '}
                        was stellar.
                    </Typography>
                </Quote>
            </SectionLayout>
        </PageLayout>
    );
};

export default Wyatt;
