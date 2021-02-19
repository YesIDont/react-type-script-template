export const addClass = <T extends HTMLElement = HTMLElement>(targetElement: T, className: string): void => {
    // eslint-disable-next-line
    targetElement.className += ` ${className} `;
};

export const removeClass = <T extends HTMLElement = HTMLElement>(targetElement: T, className: string): void => {
    // eslint-disable-next-line
    targetElement.className = targetElement.className.replace(new RegExp(String.raw`\s?${className}\s?`), '');
};
