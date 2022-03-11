import React from 'react';

import { Paragraph } from 'components/Paragraph/';
import { NavItem } from './NavItem';
import { NavItemWithContent } from './NavItemWithContent';

export const Settings: React.FC = () => {
  return (
    <>
      <NavItemWithContent title='Settings'>
        <NavItemWithContent title='Option 1'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItemWithContent>

        <NavItemWithContent title='Option 2'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItemWithContent>

        <NavItem isColumn>
          Option 3<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </NavItem>
        <NavItem isColumn>
          Option 4<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </NavItem>
        <NavItem isColumn>
          Option 5<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </NavItem>

        <NavItem>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItem>

        <NavItem>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItem>
      </NavItemWithContent>
    </>
  );
};

export default Settings;
