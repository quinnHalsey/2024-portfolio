import PageLayout from 'src/components/PageLayout/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Typography from 'src/components/Typography';
import IntroAccordions from 'src/components/IntroAccordions';

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
                <div className='phone-wrapper'>
                    <Phone />
                </div>
            </SectionLayout>
            <SectionLayout
                className='svg-wrapper laptop__wrapper'
                paddingTop
                paddingBottom
            >
                <Laptop />
            </SectionLayout>
        </PageLayout>
    );
};

export default Wyatt;
