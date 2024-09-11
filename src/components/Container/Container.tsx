import classNames from 'classnames';

import AnimateOnReveal from '../AnimateOnReveal';

import './Container.css';

interface ContainerProps {
    alignItemsCenter?: boolean;
    animateIn?: boolean;
    flex?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Container = ({
    alignItemsCenter,
    animateIn = false,
    flex,
    paddingTop,
    paddingBottom,
    children,
    className,
}: ContainerProps) => {
    const content = (
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
    return animateIn ? (
        <AnimateOnReveal className='container__animated' threshold={0.5}>
            {content}
        </AnimateOnReveal>
    ) : (
        content
    );
};

export default Container;
