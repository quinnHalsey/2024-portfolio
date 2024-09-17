import { useNavigate } from 'react-router-dom';

import PageLayout from './components/PageLayout';
import SectionLayout from './components/SectionLayout';
import Typography from './components/Typography';

const Home = () => {
    const navigate = useNavigate();

    return (
        <PageLayout>
            <SectionLayout>
                <Typography variant='h2'>PLACEHOLDER HOMEPAGE</Typography>
                <button onClick={() => navigate('/wyatt')}>Go to Wyatt</button>
            </SectionLayout>
        </PageLayout>
    );
};

export default Home;
