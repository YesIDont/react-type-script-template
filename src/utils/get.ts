import { ObjectOfNumbers } from 'types/baseTypes';

export const get = <T = HTMLElement>(query: string, element = document): T | undefined => {
    const searched: unknown = element.querySelector(query);
    if (searched) {
        return searched as T;
    }

    return undefined;
};

export const getParsedStyle = (element: Element, ...valueNames: string[]): ObjectOfNumbers => {
    if (element) {
        const style: CSSStyleDeclaration = window.getComputedStyle(element as Element);
        const parsed: ObjectOfNumbers = {};
        valueNames.forEach((name: string) => {
            parsed[name] = Math.ceil(parseFloat(style[name as any]));
        });

        return parsed;
    }

    return {};
};
