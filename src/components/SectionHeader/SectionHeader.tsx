import classNames from 'classnames';
import AnimateOnReveal from '../AnimateOnReveal';

import './SectionHeader.css';

const SectionHeader = ({
    children,
    rightAlign,
}: {
    children: React.ReactNode;
    rightAlign?: boolean;
}) => {
    return (
        <AnimateOnReveal
            className={classNames('section-header', {
                'right-align': rightAlign,
            })}
            threshold={0.5}
        >
            {children}
        </AnimateOnReveal>
    );
};

export default SectionHeader;
