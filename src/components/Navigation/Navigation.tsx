import React, { useCallback, useState, useRef } from 'react';

import { useOnClickOutside } from 'hooks/useOnClickOutside';
import * as Styled from './Navigation.styled';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stickyMenuReference = useRef(null);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useOnClickOutside(stickyMenuReference, handleCloseMenu);

  return (
    <Styled.Navigation>
      <Styled.MenuButton type='button' onClick={toggleMobileMenu}>
        <Styled.BurgerIcon isActive={isMenuOpen} />
      </Styled.MenuButton>

      <Styled.LinksContainer isOpen={isMenuOpen} ref={stickyMenuReference}>
        <Styled.Link onClick={handleCloseMenu} href='/'>
          Home
        </Styled.Link>
      </Styled.LinksContainer>
    </Styled.Navigation>
  );
};
