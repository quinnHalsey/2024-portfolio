import './SectionLayout.css';

interface SectionLayoutProps {
    flex: boolean;
    children: React.ReactNode;
    className?: string;
}

const SectionLayout = ({ children, className }: SectionLayoutProps) => {
    // const combinedClassName = className();
    return <div className={'section-layout ' + className}>{children}</div>;
};

SectionLayout.defaultProps = {
    flex: false,
};

export default SectionLayout;
