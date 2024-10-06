import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageLayout from './components/PageLayout';
import SectionLayout from './components/SectionLayout';
import Container from './components/Container';
import Typography from './components/Typography';
import Button from './components/Button';
import SquiggleDivider from './components/SquiggleDivider';

import { Crossword } from './graphics';

import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [showMoreAbout, setShowMoreAbout] = useState(false);

    return (
        <PageLayout>
            <SectionLayout className='homepage-title__section'>
                <Container className='homepage-title__text'>
                    <Typography variant='h1'>Halsey Quinn</Typography>
                    <Typography variant='h2'>
                        Full-stack Software Engineer
                    </Typography>
                </Container>
                <Container className='crossword__wrapper'>
                    <Crossword />
                </Container>
            </SectionLayout>
            <SectionLayout paddingTop className='homepage-about-me__section'>
                <Container className='homepage-about-me__container'>
                    <Typography variant='p'>
                        Hi! I'm Halsey, a self-starting and organized software
                        engineer with strong proficiency in{' '}
                        <span className='highlight-p'>
                            React and JavaScript
                        </span>
                        . I focus on building engaging, meaningful user
                        experiences. I excel at bringing ideas to life across
                        the full development lifecycle, from design to CI/CD
                        pipelines, hosting, and analytics.
                    </Typography>
                    <Container
                        className={`homepage-about-me__more-about ${
                            showMoreAbout ? 'visible' : ''
                        }`}
                    >
                        <Typography variant='p'>
                            While I was trained in the PERN (PostgreSQL,
                            Express, React, Node.js) stack at Fullstack Academy,
                            I continuously pick up new technologies, libraries,
                            and tools—most recently, I learned TypeScript and
                            used it to build this portfolio. Currently, I'm
                            studying for my AWS Cloud Practitioner certification
                            to deepen my cloud computing skills.
                        </Typography>
                        <Typography variant='p'>
                            With a background in motion graphics design,{' '}
                            <span className='highlight-b'>
                                I bring a creative edge to front-end development
                            </span>{' '}
                            , while my love for data, puzzles, and
                            problem-solving drives my work on the back end.
                            Whether I'm designing user interfaces or diving into
                            complex systems, I'm always focused on creating
                            intuitive, effective products that make a difference
                            in people's lives.
                        </Typography>
                    </Container>
                    <Button onClick={() => setShowMoreAbout(!showMoreAbout)}>
                        <Typography variant='p'>
                            {showMoreAbout ? 'Enough ' : 'More '} about me
                        </Typography>
                    </Button>
                </Container>
            </SectionLayout>
            <SquiggleDivider />
            <SectionLayout
                paddingTop
                className='homepage-featured-work__section'
            >
                <Button onClick={() => navigate('/wyatt')}>
                    <Typography variant='p'>Go to Wyatt</Typography>
                </Button>
            </SectionLayout>
        </PageLayout>
    );
};

export default Home;
