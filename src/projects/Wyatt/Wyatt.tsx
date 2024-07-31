import PageLayout from 'src/components/PageLayout/PageLayout';
import SectionLayout from 'src/components/SectionLayout';

import { Laptop } from 'src/graphics';

import './Wyatt.css';
import Typography from 'src/components/Typography';

const Wyatt = () => {
    return (
        <PageLayout>
            <SectionLayout>
                <div>
                    <div>
                        <Typography variant='h1'>Wyatt</Typography>
                        <Typography variant='h2'>
                            An AI-powered Chatbot Helping Students Complete the
                            FAFSA
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h3'>The Project</Typography>
                        <Typography variant='h3'>Key Deliverables</Typography>
                        <Typography variant='h3'>Technologies</Typography>
                    </div>
                </div>
                <div></div>
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
