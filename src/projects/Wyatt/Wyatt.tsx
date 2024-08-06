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
                <Quote />
            </SectionLayout>
        </PageLayout>
    );
};

export default Wyatt;
