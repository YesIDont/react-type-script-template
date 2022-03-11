import React from 'react';
import styled, { css } from 'styled-components';

import { Navigation } from 'components/Navigation';
import { SEO } from 'components/SEO';
import { HelmetProvider } from 'react-helmet-async';

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
      <HelmetProvider>
        <SEO />
        <Content>Content</Content>
        <Navigation />
      </HelmetProvider>
    </AppContainer>
  );
};
