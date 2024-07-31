import './Typography.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p';

interface TypographyProps {
    variant: TypographyVariant;
    children: React.ReactNode;
    className?: string;
}

const Typography = ({ variant, children, className }: TypographyProps) => {
    const Tag = variant as keyof JSX.IntrinsicElements; // Map variant to HTML tag
    return <Tag className={className}>{children}</Tag>;
};

export default Typography;
