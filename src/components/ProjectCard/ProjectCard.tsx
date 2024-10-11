import Typography from 'src/components/Typography';

import { FeaturedProject } from 'src/types';

import './ProjectCard.css';

interface ProjectCardProps {
    backgroundImage: string;
    project: FeaturedProject;
}

const ProjectCard = ({ backgroundImage, project }: ProjectCardProps) => {
    const ProjectButton = project.href ? 'a' : 'button';

    const buttonProps = {
        ...(project.href
            ? // Add href/target or onClick attributes depending if <button> or <a> card
              { href: project.href, target: '_blank' }
            : { onClick: project.callback }),
        // Add aria-label to both <button> and <a> cards
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
