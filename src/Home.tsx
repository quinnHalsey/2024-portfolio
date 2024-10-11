import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageLayout from './components/PageLayout';
import SectionLayout from './components/SectionLayout';
import SectionHeader from './components/SectionHeader';
import AnimateOnReveal from './components/AnimateOnReveal';
import Container from './components/Container';
import Typography from './components/Typography';
import Button from './components/Button';
import SquiggleDivider from './components/SquiggleDivider';
import Quote from './components/Quote';
import { ProjectCardContainer } from './components/ProjectCard';

import { Crossword } from './graphics';

import { FeaturedProject } from './types';

import './Home.css';

//TODO: add timeline section
//TODO: skills section?
//TODO: navigation between pages animation (right-align homepage)
//TODO: make to pay the bills an easter egg

const Home = () => {
    const navigate = useNavigate();
    const [showMoreAbout, setShowMoreAbout] = useState(false);

    const featuredProjects: FeaturedProject[] = [
        {
            title: 'Wyatt',
            description:
                'AI-powered chatbot and marketing site to assist students with the FAFSA',
            tech: ['React', 'JavaScript', 'OpenAI API'],
            callback: () => navigate('/wyatt'),
            ariaLabel: 'View Wyatt project page',
        },
        {
            title: 'Impact Report',
            description: 'Immersive digital report for non-profit organization',
            tech: ['React', 'JavaScript', 'Gatsby'],
            //TODO: TEMP HREF before project page is built; reinstate callback
            href: 'https://drive.google.com/file/d/19-TT6i9onud3NU4xXmJ2k3yiFeeUD1R8/view',
            ariaLabel: 'Watch screen recording of Impact Report',
            // callback: () => navigate('/bdt-impact-report'),
            // ariaLabel: 'View Impact Report project page',
        },
        {
            title: 'Asteroids',
            description: `Interactive visualization of the closest and largest asteroids to Earth on any given day`,
            tech: ['React', 'Redux', 'Three.js'],
            href: 'https://asteroids-ghp.vercel.app/',
            ariaLabel: 'Open Asteroids project in new tab',
        },
    ];

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
            <SectionLayout
                paddingTop
                paddingBottom
                className='homepage-about-me__section'
            >
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
            <SectionLayout
                paddingTop
                className='homepage-featured-work__section'
            >
                <SectionHeader rightAlign>
                    <Typography variant='h2'>
                        <span className='highlight'>FEATURED PROJECTS</span>
                    </Typography>
                </SectionHeader>
                <Container>
                    <AnimateOnReveal className='homepage-featured-work__project-container'>
                        <ProjectCardContainer projects={featuredProjects} />
                    </AnimateOnReveal>
                </Container>
                <SquiggleDivider />
                <Container
                    animateIn
                    className='homepage-testimonial__container'
                >
                    <Quote attribution='LinkedIn Recommendation, Manager at Benefits Data Trust'>
                        <Typography variant='blockquote'>
                            [Halsey]{' '}
                            <span className='highlight-u'>
                                rose to every challenge
                            </span>{' '}
                            while we worked together -- building a beautiful
                            website from scratch for Wyatt, significantly
                            upgrading the functionality of our organizational
                            blog, and building a world-class immersive digital
                            impact report.
                        </Typography>
                    </Quote>
                </Container>
            </SectionLayout>
            {/* <SectionLayout>
                <SectionHeader>
                    <Typography variant='h2'>
                        <span className='highlight'>SKILLS</span>{' '}
                        <span className='homepage-skills__subtitle'>
                            TO PAY THE BILLS
                        </span>
                    </Typography>
                </SectionHeader>
            </SectionLayout> */}
        </PageLayout>
    );
};

export default Home;
