import SectionLayout from '../SectionLayout';
import AnimateOnReveal from '../AnimateOnReveal';

import { Squiggle } from 'src/graphics';

import './SquiggleDivider.css';

const SquiggleDivider = () => {
    return (
        <SectionLayout>
            <AnimateOnReveal className='squiggle-divider__wrapper'>
                <Squiggle />
            </AnimateOnReveal>
        </SectionLayout>
    );
};

export default SquiggleDivider;
