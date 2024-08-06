import PageLayout from 'src/components/PageLayout/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';
import Quote from 'src/components/Quote';

import { Laptop, Phone } from 'src/graphics';

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
        </PageLayout>
    );
};

export default Wyatt;
