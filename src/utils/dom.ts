export const get = <T = HTMLElement>(query: string, element = document): T | undefined => {
    const searched: unknown = element.querySelector(query);
    if (searched) {
        return searched as T;
    }

    return undefined;
};

export const addClass = <T extends HTMLElement = HTMLElement>(targetElement: T, className: string): void => {
    // eslint-disable-next-line
    targetElement.className += ` ${className} `;
};

export const removeClass = <T extends HTMLElement = HTMLElement>(targetElement: T, className: string): void => {
    // eslint-disable-next-line
    targetElement.className = targetElement.className.replace(new RegExp(String.raw`\s?${className}\s?`), '');
};
