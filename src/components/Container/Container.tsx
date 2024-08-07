import classNames from 'classnames';

import './Container.css';

interface ContainerProps {
    alignItemsCenter?: boolean;
    flex?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Container = ({
    alignItemsCenter,
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
                    'align-items-center': alignItemsCenter,
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
