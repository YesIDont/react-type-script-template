import styled, { css } from 'styled-components';

export const App = styled.div(
  ({ theme: { colors } }) => css`
    color: ${colors.primary()};
    padding: 4rem;
  `,
);
