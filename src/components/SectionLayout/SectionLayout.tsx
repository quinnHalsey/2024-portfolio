import classNames from 'classnames';

import './SectionLayout.css';
interface SectionLayoutProps {
    flex?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    children: React.ReactNode;
    className?: string;
}

const SectionLayout = ({
    flex = false,
    paddingTop = false,
    paddingBottom = false,
    children,
    className,
}: SectionLayoutProps) => {
    return (
        <div
            className={classNames(
                {
                    flex,
                    'padding-top': paddingTop,
                    'padding-bottom': paddingBottom,
                },
                'section-layout',
                className
            )}
        >
            {children}
        </div>
    );
};

export default SectionLayout;
