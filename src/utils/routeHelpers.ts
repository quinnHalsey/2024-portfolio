import { projectMap } from './constants';

/**
 * Retrieves a project object from the provided URL path.
 *
 * This function extracts the project key from the given `pathname` by removing the leading `/`
 * and any query parameters or fragments (e.g., `?param=value` or `#fragment`). It then checks if
 * the project exists in the `projectMap` object and verifies if the URL matches the `slug`
 * of the project.
 *
 * @param {string} pathname - The URL path from which to extract the project key. It may include
 *                            query parameters or fragments, which will be ignored.
 *
 * @returns {Project | null} - Returns the corresponding project object if found and valid, otherwise `null`.
 *
 * @example
 * // Assume projectMap contains a project with the route '/my-project'
 * const project = getProjectFromPath('/my-project');
 */

export const getProjectFromPath = (pathname: string) => {
    const cleanPath = pathname.split(/[?#]/)[0]; // Remove query parameters or fragments (after ? or #)
    const parsedPath = cleanPath.slice(1); // Removes leading / from URL

    const project = projectMap[parsedPath];

    if (project && project.slug === pathname) {
        return project;
    } else {
        return null;
    }
};
