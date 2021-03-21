import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  reference: RefObject<T>,
  callback: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = reference?.current;

      if (!element || element.contains((event?.target as Node) || undefined)) {
        return;
      }

      callback(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [reference, callback]);
};
