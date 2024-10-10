import Typography from 'src/components/Typography';

import { FeaturedProject } from 'src/types';

import './ProjectCard.css';

interface ProjectCardProps {
    backgroundImage: string;
    project: FeaturedProject;
}

const ProjectCard = ({ backgroundImage, project }: ProjectCardProps) => {
    return (
        <div className='project-card__wrapper'>
            <button
                className='project-card'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
                onClick={project.callback ? project.callback : undefined}
            >
                <div className='project-card__content'>
                    <div className='project-card__title-description'>
                        <Typography variant='h3'>{project.title}</Typography>
                        <Typography
                            variant='p'
                            className='project-card__description'
                        >
                            {project.description}
                        </Typography>
                    </div>
                    <div className='project-card__technologies'>
                        <Typography variant='p'>
                            {project.tech.join(' – ')}
                        </Typography>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ProjectCard;
