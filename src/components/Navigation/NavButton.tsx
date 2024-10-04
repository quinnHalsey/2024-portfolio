import Typography from '../Typography';

interface NavButtonProps {
    ariaLabel?: string;
    children: React.ReactNode;
    label: string;
    onClick?: () => void;
}
const NavButton = ({
    ariaLabel = '',
    children,
    label,
    onClick,
}: NavButtonProps) => {
    return (
        <li className='nav-item__wrapper'>
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
        </li>
    );
};

export default NavButton;
