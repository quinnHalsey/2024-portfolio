import classNames from 'classnames';

import './Container.css';

interface ContainerProps {
    flex?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Container = ({
    flex,
    paddingTop,
    paddingBottom,
    children,
    className,
}: ContainerProps) => {
    return (
        <div
            className={classNames(
                {
                    flex,
                    'padding-top': paddingTop,
                    'padding-bottom': paddingBottom,
                },
                'container',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
