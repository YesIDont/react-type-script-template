import React from 'react';

import { IconWrapper, IconPropsType } from './IconWrapper';

export const CloseIcon: React.FC<IconPropsType> = ({ ...props }) => {
  return (
    <IconWrapper {...props} viewBox='0 0 18 18'>
      <path d='M12.2 9l5.6-5.6c.2-.2.2-.6 0-.8L15.4.2c-.2-.2-.6-.2-.8 0L9 5.8 3.4.2c-.2-.2-.6-.2-.8 0L.2 2.5c-.2.2-.2.6 0 .8L5.8 9 .2 14.6c-.2.2-.2.6 0 .8l2.4 2.4c.2.2.6.2.8 0L9 12.2l5.6 5.6c.2.2.6.2.8 0l2.4-2.4c.2-.2.2-.6 0-.8L12.2 9z' />
    </IconWrapper>
  );
};
