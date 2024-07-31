import PageLayout from 'src/components/PageLayout/PageLayout';
import SectionLayout from 'src/components/SectionLayout';

import { Laptop } from 'src/graphics';

import './Wyatt.css';

const Wyatt = () => {
    return (
        <PageLayout>
            <SectionLayout>
                <div>
                    <div>
                        <h1 className='test'>Wyatt</h1>
                        <h2>
                            An AI-powered Chatbot Helping Students Complete the
                            FAFSA
                        </h2>
                    </div>
                    <div>
                        <h3>The Project</h3>
                        <h3>Key Deliverables</h3>
                        <h3>Technologies</h3>
                    </div>
                </div>
                <div></div>
            </SectionLayout>
            <SectionLayout className='svg-wrapper laptop__wrapper'>
                <Laptop />
            </SectionLayout>
        </PageLayout>
    );
};

export default Wyatt;
