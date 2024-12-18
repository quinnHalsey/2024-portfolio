import { useNavigate } from 'react-router-dom';

import PageLayout from 'src/components/PageLayout';
import SectionLayout from 'src/components/SectionLayout';
import Typography from 'src/components/Typography';

import { Ghost } from '../graphics';

import './NotFound.css';
import Button from 'src/components/Button';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <PageLayout className='not-found-page'>
            <SectionLayout flex className='not-found-section'>
                <div className='not-found-text'>
                    <Typography variant='h1'>Oops!</Typography>
                    <Typography variant='p'>
                        The page you're looking for doesn't exist.
                    </Typography>
                    <Button
                        onClick={() => navigate('/')}
                        className='not-found__home-button'
                    >
                        <Typography variant='p'>Go to Home</Typography>
                    </Button>
                </div>
                <div className='ghost-wrapper'>
                    <Ghost />
                </div>
            </SectionLayout>
        </PageLayout>
    );
};

export default NotFound;
