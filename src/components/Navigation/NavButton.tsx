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
        <>
            {href ? (
                <a
                    className='navigation-button'
                    href={href}
                    aria-label={ariaLabel}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {children}
                    <div className='navigation-button__label'>
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
                    <div className='navigation-button__label'>
                        <Typography variant='p'>{label}</Typography>
                    </div>
                </button>
            )}
        </>
    );
};

export default NavButton;
