import { useNavigate } from 'react-router-dom';

import Typography from 'src/components/Typography';

import { FeaturedProject } from 'src/types';

import './ProjectCard.css';

interface ProjectCardProps {
    backgroundImage: string;
    project: FeaturedProject;
}

const ProjectCard = ({ backgroundImage, project }: ProjectCardProps) => {
    const navigate = useNavigate();
    const ProjectButton = project.href ? 'a' : 'button';

    const buttonProps = {
        ...(project.href
            ? // Add href/target or onClick attributes depending if <button> or <a> card
              { href: project.href, target: '_blank' }
            : { onClick: () => navigate(project?.slug || '') }),
        // Add aria-label to both <button> and <a> cards
        'aria-label': project.ariaLabel,
    };

    return (
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
    );
};

export default ProjectCard;
