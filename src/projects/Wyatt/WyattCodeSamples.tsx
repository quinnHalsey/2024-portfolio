import Typography from '../../components/Typography';

export const stepOneCode = (
    <Typography variant='pre' className='code-sample'>
        {`const`} <span className='highlight-u'>StepOne</span>{' '}
        {`= StudentConsumer(({ `}
        <span className='highlight-y'>student</span>
        {` }) => {
    const [`}
        <span className='highlight-y'>landingPage</span>
        {`, `}
        <span className='highlight-y'>setLandingPage</span>
        {`] = useState(null); 
    `}
        <span className='highlight-b'>{`// Holds landing page information`}</span>
        {`
    const `}
        <span className='highlight-y'>partner</span>
        {` = usePartner(`}
        <span className='highlight-y'>student</span>
        {`); 
    `}
        <span className='highlight-b'>{`// Fetch partner configuration`}</span>
        {`

    useEffect(() => {
        `}
        <span className='highlight-b'>{`// Get the landing page key from the URL path`}</span>
        {`
        const `}
        <span className='highlight-y'>location</span>
        {` = window?.location?.pathname.substring(1);
        if (`}
        <span className='highlight-y'>location</span>
        {`) `}
        <span className='highlight-y'>setLandingPage</span>
        {`(getPartnerKey(`}
        <span className='highlight-y'>location</span>
        {`));
    }, []);

    return (
        <div className='opt-in__questions__wrapper'>
            <`}
        <span className='highlight-u'>QuestionName</span>
        {` step={0} />
            <QuestionPhone step={0} />
            <QuestionStatus step={0} />
            <QuestionState step={0} />
            `}
        <span className='highlight-b'>{`{/* Render partner-specific required questions if available */}`}</span>
        {`
            {`}
        <span className='highlight-y'>partner</span>
        {`?.required && <`}
        <span className='highlight-y'>partner</span>
        {`.required />}
            {!`}
        <span className='highlight-y'>student</span>
        {`.loading ? (
                <p className='opt-in__terms__text'>
                    [ . . . ]
                </p>
            ) : (
                <LoadingText />
            )}
        </div>
    );
});`}
    </Typography>
);

export const questionNameCode = (
    <Typography variant='pre' className='code-sample'>
        {`const `}
        <span className='highlight-u'>QuestionName</span>
        {` = () => {
    const `}
        <span className='highlight-y'>validateName</span>
        {` = (`}
        <span className='highlight-y'>name</span>
        {`) => {
        return `}
        <span className='highlight-y'>name</span>
        {`.length > 0;
    }

    return <`}
        <span className='highlight-u'>{`FormGroupText`}</span>
        {`
        updateKey="`}
        <span className='highlight-y'>referredName</span>
        {`"
        questionKey="`}
        <span className='highlight-y'>questionName</span>
        {`"
        errorMessageToSet="Please enter your name."
        labelText="First name *"
        labelFieldName="`}
        <span className='highlight-y'>firstName</span>
        {`"
        required={true}
        validate={`}
        <span className='highlight-y'>validateName</span>
        {`}
        step={0}
        placeholder="First name"
    />
}`}
    </Typography>
);

export const formGroupTextCode = (
    <Typography variant='pre' className='code-sample'>
        {`const `}
        <span className='highlight-u'>FormGroupText</span>
        {` = ErrorConsumer(
    StudentConsumer(
        ({
            `}
        <span className='highlight-y'>labelText</span>
        {`,
            `}
        <span className='highlight-y'>labelFieldName</span>
        {`,
            `}
        <span className='highlight-y'>questionKey</span>
        {`,
            `}
        <span className='highlight-y'>updateKey</span>
        {`,
            `}
        <span className='highlight-y'>required</span>
        {`,
            `}
        <span className='highlight-y'>errorMessageToSet</span>
        {`,
            `}
        <span className='highlight-y'>placeholder</span>
        {`,
            `}
        <span className='highlight-y'>validate</span>
        {`,
            `}
        <span className='highlight-y'>student</span>
        {`,
            `}
        <span className='highlight-y'>error</span>
        {`,
            `}
        <span className='highlight-y'>step</span>
        {`,
        }) => {
            const [`}
        <span className='highlight-y'>value</span>
        {`, `}
        <span className='highlight-y'>setValue</span>
        {`] = useState('');

            `}
        <span className='highlight-b'>{`// Set error message if validation step matches current step`}</span>
        {`
            let `}
        <span className='highlight-y'>errorMessage</span>
        {` = '';
            if (`}
        <span className='highlight-y'>error</span>
        {`.validateStep === `}
        <span className='highlight-y'>step</span>
        {`)
                `}
        <span className='highlight-y'>errorMessage</span>
        {` = `}
        <span className='highlight-y'>error</span>
        {`.questionErrors[`}
        <span className='highlight-y'>questionKey</span>
        {`].message;

            `}
        <span className='highlight-b'>{`// Handle input change`}</span>
        {`
            const `}
        <span className='highlight-y'>handleChange</span>
        {` = ({ target }) => {
                const `}
        <span className='highlight-y'>value</span>
        {` = target.value;
                `}
        <span className='highlight-y'>setValue</span>
        {`(`}
        <span className='highlight-y'>value</span>
        {`);
                `}
        <span className='highlight-y'>student</span>
        {`.update({ [`}
        <span className='highlight-y'>updateKey</span>
        {`]: `}
        <span className='highlight-y'>value</span>
        {` });
            };

            `}
        <span className='highlight-b'>{`// Validate input and set/clear error`}</span>
        {`
            useEffect(() => {
                if (!`}
        <span className='highlight-y'>validate</span>
        {`(`}
        <span className='highlight-y'>value</span>
        {`)) {
                    `}
        <span className='highlight-y'>error</span>
        {`.setQuestionError(`}
        <span className='highlight-y'>questionKey</span>
        {`, `}
        <span className='highlight-y'>errorMessageToSet</span>
        {`);
                } else if (`}
        <span className='highlight-y'>validate</span>
        {`(`}
        <span className='highlight-y'>value</span>
        {`)) {
                    `}
        <span className='highlight-y'>error</span>
        {`.clearQuestionError(`}
        <span className='highlight-y'>questionKey</span>
        {`);
                }
            }, [`}
        <span className='highlight-y'>error</span>
        {`.validateOptIn, `}
        <span className='highlight-y'>value</span>
        {`]);

            `}
        <span className='highlight-b'>{`// Show loading component if student data is loading`}</span>
        {`
            if (`}
        <span className='highlight-y'>student</span>
        {`.loading)
                return <FormGroupLoading labelText={`}
        <span className='highlight-y'>labelText</span>
        {`} />;

            return (
                <div className='opt-in__question'>
                    <FormControl>
                        <QuestionLabel
                            labelText={`}
        <span className='highlight-y'>labelText</span>
        {`}
                            labelFieldName={`}
        <span className='highlight-y'>labelFieldName</span>
        {`}
                        />
                        <input
                            required={`}
        <span className='highlight-y'>required</span>
        {`}
                            type='text'
                            name={`}
        <span className='highlight-y'>labelFieldName</span>
        {`}
                            placeholder={`}
        <span className='highlight-y'>placeholder</span>
        {`}
                            onChange={`}
        <span className='highlight-y'>handleChange</span>
        {`}
                            className={`}
        <span className='highlight-y'>errorMessage</span>
        {` ? 'opt-in__error' : ''}
                            disabled={`}
        <span className='highlight-y'>student</span>
        {`.loading}
                        ></input>
                        <ErrorMessage>{`}
        <span className='highlight-y'>errorMessage</span>
        {`}</ErrorMessage>
                    </FormControl>
                </div>
            );
        }
    )
);`}
    </Typography>
);
