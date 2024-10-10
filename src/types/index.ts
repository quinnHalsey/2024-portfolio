export type FeaturedProject = {
    title: string;
    description: string;
    tech: string[];
    href?: string;
    callback?: () => void;
};
