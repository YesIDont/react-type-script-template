import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { MenuIcon, CloseIcon } from 'icons/';
import { Paragraph } from 'components/Paragraph/';
import { ScrollVertical } from 'components/ScrollVertical/';
import { colorsLibrary, navigationWidth } from 'styles/themeDefault';
import { Flex } from 'components/Flex';
import { NavItem } from './NavItem';
import { NavItemWithContent } from './NavItemWithContent';
import { Settings } from './Settings';

const NavigationClosed = styled.div(
  ({ theme: { colors } }) => css`
    text-align: center;
    height: 100vh;
    background-color: ${colors.primary};
  `,
);

const OpenMenuButton = styled(Flex)(
  ({ theme: { padding } }) => css`
    height: 40px;
    padding: ${padding.small};
  `,
);

const NavigationOpen = styled.div(
  ({ theme: { colors } }) => css`
    align-items: flex-start;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    width: ${navigationWidth}px;
    transition: right ease 0.2s;
  `,
);

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavigationClosed>
        <OpenMenuButton as='button' type='button' onClick={() => setIsOpen(true)}>
          <MenuIcon color={colorsLibrary.secondary} />
        </OpenMenuButton>
      </NavigationClosed>
      <NavigationOpen style={{ right: isOpen ? 0 : `${-navigationWidth}px` }}>
        <ScrollVertical>
          <NavItem style={{ fontWeight: 'bold', justifyContent: 'space-between' }}>
            <Flex>
              <MenuIcon color={colorsLibrary.secondary} style={{ marginRight: '0.5rem' }} />
              Menu
            </Flex>
            <Flex as='button' type='button' onClick={() => setIsOpen(false)}>
              <CloseIcon color={colorsLibrary.secondary} />
            </Flex>
          </NavItem>

          <Settings />

          <NavItemWithContent title='Users'>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </NavItemWithContent>

          <NavItemWithContent title='Profile'>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </NavItemWithContent>

          <NavItem>
            <Paragraph>
              You can place Menu items however you&apos;d like, mixing buttons that will open
              submenus containers with plane text.
            </Paragraph>
          </NavItem>

          <NavItemWithContent title='Contact'>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </NavItemWithContent>

          <NavItem isColumn>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </NavItem>
        </ScrollVertical>
      </NavigationOpen>
    </>
  );
};
