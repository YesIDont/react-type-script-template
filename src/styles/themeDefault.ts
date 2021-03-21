import { setBoxShadow, setColorGetter } from 'utils/styles';
import { ObjectOfNumbers, ObjectOfStrings, ObjectOfColorGetters } from 'types/baseTypes';
import * as baseColors from './baseColors';

export const breakpoints: ObjectOfStrings = {
  phone: '576',
  tablet: '768',
  bigTablet: '1024',
  desktop: '1280',
  bigDesktop: '1600',
};

const lightBlue = '0, 190, 250';
const dominantColor = baseColors.gray10;

export const colors: ObjectOfColorGetters = {
  primary: setColorGetter(dominantColor),
  secondary: setColorGetter(baseColors.white),
  shade: setColorGetter(baseColors.gray60),
  contrast: setColorGetter(lightBlue),
};

const fontSizes: ObjectOfNumbers = {
  sectionTitle: 4,
  title: 2.4,
  paragraph: 1.8,
};

const setFontSize = (size: string): string => {
  const regularSize: number = fontSizes[size];

  return `
        font-size: ${regularSize}rem;
        line-height: ${regularSize * 1.15}rem;
    `;
};

export const theme = {
  setBoxShadow,
  colors,
  fontSizes,
  setFontSize,
};
