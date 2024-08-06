import PageLayout from 'src/components/PageLayout/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Container from 'src/components/Container';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';
import Quote from 'src/components/Quote';

import { Laptop, Phone } from 'src/graphics';

import './Wyatt.css';
import SquiggleDivider from 'src/components/SquiggleDivider';

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
                    <div className='phone-wrapper'>
                        <Phone />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout
                className='svg-wrapper laptop__wrapper'
                flex
                paddingTop
                paddingBottom
            >
                <Laptop />
            </SectionLayout>
            <SectionLayout>
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
            <SquiggleDivider />
            <SectionLayout>
                <Typography variant='h2' className='section-header'>
                    BUILDING A <span className='highlight-b'>SCALABLE</span>,{' '}
                    <span className='highlight-b'>CUSTOMIZABLE</span> OPT-IN
                    FORM
                </Typography>
                <Container flex className='opt-in__section'>
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
                    <div></div>
                </Container>
            </SectionLayout>
        </PageLayout>
    );
};

export default Wyatt;
