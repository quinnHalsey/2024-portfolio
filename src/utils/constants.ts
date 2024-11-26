import { FeaturedProject, Project, ProjectMap } from 'src/types';

export const featuredProjects: FeaturedProject[] = [
    {
        title: 'Wyatt',
        description:
            'AI-powered chatbot and marketing site to assist students with the FAFSA',
        tech: ['React', 'JavaScript', 'OpenAI API'],
        slug: '/wyatt',
        ariaLabel: 'View Wyatt project page',
    },
    {
        title: 'Impact Report',
        description: 'Immersive digital report for non-profit organization',
        tech: ['React', 'JavaScript', 'Gatsby'],
        slug: '/bdt-impact-report',
        ariaLabel: 'View Impact Report project page',
    },
    {
        title: 'Asteroids',
        description: `Interactive visualization of the closest and largest asteroids to Earth on any given day`,
        tech: ['React', 'Redux', 'Three.js'],
        href: 'https://asteroids-ghp.vercel.app/',
        ariaLabel: 'Open Asteroids project in new tab',
    },
];

export const projectMap: ProjectMap = {
    wyatt: {
        key: 'wyatt',
        slug: '/wyatt',
        videoSrc:
            'https://drive.google.com/file/d/19fkeSLPIO3qFshNow7aK3oIq0vUlreZi/preview',
    },
    'bdt-impact-report': {
        key: 'impact',
        slug: '/bdt-impact-report',
        videoSrc:
            'https://drive.google.com/file/d/19-TT6i9onud3NU4xXmJ2k3yiFeeUD1R8/preview',
    },
};
