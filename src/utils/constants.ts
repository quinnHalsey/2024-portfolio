type Project = {
    slug: string;
    videoSrc?: string;
};

type FeaturedProjects = {
    [key: string]: Project;
};

export const featuredProjects: FeaturedProjects = {
    wyatt: {
        slug: '/wyatt',
        videoSrc:
            'https://drive.google.com/file/d/19fkeSLPIO3qFshNow7aK3oIq0vUlreZi/preview',
    },
};
