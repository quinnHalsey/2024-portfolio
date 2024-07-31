import classNames from 'classnames';

import './SectionLayout.css';
interface SectionLayoutProps {
    flex?: boolean;
    children: React.ReactNode;
    className?: string;
}

const SectionLayout = ({
    flex = false,
    children,
    className,
}: SectionLayoutProps) => {
    return (
        <div
            className={classNames(
                {
                    flex,
                },
                className
            )}
        >
            {children}
        </div>
    );
};

export default SectionLayout;
