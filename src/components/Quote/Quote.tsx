import Typography from '../Typography';
import './Quote.css';

import { QuotationMark } from 'src/graphics';

const Quote = ({
    children,
    attribution,
}: {
    children: React.ReactNode;
    attribution: string;
}) => {
    return (
        <div className='quote__wrapper'>
            <div className='quotation-mark__wrapper'>
                <QuotationMark />
            </div>
            <div className='quote-text__wrapper'>
                {children}
                <Typography variant='cite' className='quote-text__attribution'>
                    {attribution}
                </Typography>
            </div>
        </div>
    );
};

export default Quote;
