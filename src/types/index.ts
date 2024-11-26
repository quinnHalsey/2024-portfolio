export type FeaturedProject = {
    title: string;
    description: string;
    tech: string[];
    ariaLabel: string;
    href?: string;
    slug?: string;
};

export type Project = {
    key: string;
    slug: string;
    videoSrc?: string;
};

export type ProjectMap = {
    [key: string]: Project;
};

export interface AccordionItem {
    title: string;
    highlight: 'y' | 'b' | 'p';
    description: JSX.Element;
}

export type CodeFile = {
    name: string;
    content: React.ReactNode;
};
