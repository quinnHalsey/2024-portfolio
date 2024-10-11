export type FeaturedProject = {
    title: string;
    description: string;
    tech: string[];
    ariaLabel: string;
    href?: string;
    callback?: () => void;
};
