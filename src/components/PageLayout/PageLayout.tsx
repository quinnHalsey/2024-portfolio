import './PageLayout.css';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return <main className='page-layout'>{children}</main>;
};

export default PageLayout;
