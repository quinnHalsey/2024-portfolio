import AnimateOnReveal from '../AnimateOnReveal';
import Typography from '../Typography';

import { QuotationMark } from 'src/graphics';

import './Quote.css';

const Quote = ({
    children,
    direction = 'left',
    attribution,
}: {
    children: React.ReactNode;
    direction?: 'right' | 'left';
    attribution: string;
}) => {
    return (
        <AnimateOnReveal>
            <div className={'quote__wrapper ' + direction}>
                <div className='quotation-mark__wrapper'>
                    <QuotationMark />
                </div>
                <div className='quote-text__wrapper'>
                    {children}
                    <Typography
                        variant='cite'
                        className='quote-text__attribution'
                    >
                        {attribution}
                    </Typography>
                </div>
            </div>
        </AnimateOnReveal>
    );
};

export default Quote;
