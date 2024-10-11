export type Project = {
    key: string;
    slug: string;
    videoSrc?: string;
};

type ProjectMap = {
    [key: string]: Project;
};

export const featuredProjects: ProjectMap = {
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
            'https://drive.google.com/file/d/19fkeSLPIO3qFshNow7aK3oIq0vUlreZi/preview',
    },
};
