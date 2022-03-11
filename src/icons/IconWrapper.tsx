import React from 'react';
import { ObjectOfStrings } from 'types/baseTypes';

export type IconPropsType = {
  height?: number;
  width?: number;
  transform?: string;
  color?: string;
  style?: ObjectOfStrings;
};

type IconWrapperPropsType = IconPropsType & {
  viewBox: string;
};

export const IconWrapper: React.FC<IconWrapperPropsType> = ({
  children,
  color = '',
  height = 14,
  transform,
  width = 14,
  style,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      width={width}
      fill={color}
      style={{ transform, width, height, ...style }}
      {...rest}
    >
      {children}
    </svg>
  );
};
