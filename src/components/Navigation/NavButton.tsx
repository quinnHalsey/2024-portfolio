import Typography from '../Typography';

interface NavButtonProps {
    ariaLabel?: string;
    children: React.ReactNode;
    label: string;
    onClick?: () => void;
    href?: string;
}
const NavButton = ({
    ariaLabel = '',
    children,
    label,
    onClick,
    href,
}: NavButtonProps) => {
    return (
        <li className='nav-item__wrapper'>
            {href ? (
                <a
                    className='navigation-button'
                    href={href}
                    aria-label={ariaLabel}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {children}
                    <div>
                        <Typography variant='p'>{label}</Typography>
                    </div>
                </a>
            ) : (
                <button
                    className='navigation-button'
                    onClick={onClick}
                    aria-label={ariaLabel}
                >
                    {children}
                    <div>
                        <Typography variant='p'>{label}</Typography>
                    </div>
                </button>
            )}
        </li>
    );
};

export default NavButton;
