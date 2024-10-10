import './ProjectCard.css';

interface ProjectCardProps {
    children: React.ReactNode;
    backgroundImage: string;
}

const ProjectCard = ({ children, backgroundImage }: ProjectCardProps) => {
    return (
        <div className='project-card__wrapper'>
            <button
                className='project-card'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className='project-card__content'>{children}</div>
            </button>
        </div>
    );
};

export default ProjectCard;
