import { useTheme } from '../../contexts/ThemeContext';

import AnimateOnReveal from '../AnimateOnReveal';
import ProjectCard from './ProjectCard';

import {
    card1Dark,
    card1Light,
    card2Dark,
    card2Light,
    card3Dark,
    card3Light,
} from '../../graphics/images/cards';

import { FeaturedProject } from '../../types';

import './ProjectCard.css';

const ProjectCardContainer = ({
    projects,
}: {
    projects: FeaturedProject[];
}) => {
    const { theme } = useTheme();

    const cardImages = [
        { dark: card1Dark, light: card1Light },
        { dark: card2Dark, light: card2Light },
        { dark: card3Dark, light: card3Light },
    ];

    return (
        <div className='project-card__container'>
            {projects.map((project, i) => {
                const cardBackgroundIndex = i % cardImages.length;
                const cardBackground =
                    cardImages[cardBackgroundIndex][
                        theme === 'theme-dark' ? 'light' : 'dark'
                    ];

                return (
                    <AnimateOnReveal
                        key={`${project.title}-${i}`}
                        className='project-card__animation-wrapper'
                        threshold={1}
                    >
                        <ProjectCard
                            key={`${project.title}-${i}`}
                            backgroundImage={cardBackground}
                            project={project}
                        />
                    </AnimateOnReveal>
                );
            })}
        </div>
    );
};

export default ProjectCardContainer;
