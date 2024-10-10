import Typography from 'src/components/Typography';

import { FeaturedProject } from 'src/types';

import './ProjectCard.css';

interface ProjectCardProps {
    backgroundImage: string;
    project: FeaturedProject;
}

//TODO: fix card design layout

const ProjectCard = ({ backgroundImage, project }: ProjectCardProps) => {
    const ProjectButton = project.href ? 'a' : 'button';
    const buttonProps = project.href
        ? {
              href: project.href,
              target: '_blank',
              'aria-label': project.ariaLabel,
          }
        : {
              onClick: project.callback ? project.callback : undefined,
              'aria-label': project.ariaLabel,
          };

    return (
        <div className='project-card__wrapper'>
            <ProjectButton
                className='project-card'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
                {...buttonProps}
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
            </ProjectButton>
        </div>
    );
};

export default ProjectCard;
