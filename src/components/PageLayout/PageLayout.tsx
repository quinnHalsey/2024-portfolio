import './PageLayout.css';

const PageLayout = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <main className={`page-layout ${className}`}>{children}</main>;
};

export default PageLayout;
