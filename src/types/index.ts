export type FeaturedProject = {
    title: string;
    description: string;
    tech: string[];
    ariaLabel: string;
    href?: string;
    callback?: () => void;
};

export interface AccordionItem {
    title: string;
    highlight: 'y' | 'b' | 'p';
    description: JSX.Element;
}
