import { setColor } from 'utils/styles';
import { ObjectOfNumbers, ObjectOfStrings } from 'types/baseTypes';
import * as colors from './colors';

export const colorsLibrary: ObjectOfStrings = {
  primary: setColor(colors.gray40),
  secondary: setColor(colors.white),
  shadeDark: setColor(colors.gray60),
  shadeMid: setColor(colors.gray80),
  shadeLight: setColor(colors.gray100),
  shadeUltraLight: setColor(colors.gray190),
  hightlight: setColor(colors.blueLight),
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

const padding = {
  small: '0.5rem 0.8rem',
};

export const navigationWidth = 320;

export const paragraph = `
  color: ${colorsLibrary.shadeUltraLight};
  font-size: 0.9rem;
  line-height: 1.3rem;
  padding: ${padding.small};
`;

export const theme = {
  colors: colorsLibrary,
  fontSizes,
  navigationWidth,
  padding,
  paragraph,
  setFontSize,
};
