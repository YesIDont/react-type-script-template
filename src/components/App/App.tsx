import React from 'react';
import styled, { css } from 'styled-components';

import { Navigation } from 'components/Navigation';
import { SEO } from 'components/SEO';
import { ToggleSwitch } from 'components/ToggleSwitch';

export const AppContainer = styled.div(
  ({ theme: { colors } }) => css`
    color: ${colors.primary};
    display: flex;
    justify-content: space-between;
  `,
);

export const Content = styled.div(
  ({ theme: { padding } }) => css`
    flex: 1;
    padding: ${padding.small};
  `,
);

export const App: React.FC = () => {
  return (
    <AppContainer>
      <SEO />
      <Content>
        <ToggleSwitch
          id='test-checkbox'
          onChange={(value: boolean, target?: HTMLInputElement) => {
            // eslint-disable-next-line no-alert
            if (target) alert(`Current value of the ${target.id} is: ${value}`);
          }}
        >
          Option with true / false value
        </ToggleSwitch>
      </Content>
      <Navigation />
    </AppContainer>
  );
};
