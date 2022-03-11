import styled, { css } from 'styled-components';

export const Paragraph = styled.p(
  ({ theme: { paragraph } }) => css`
    ${paragraph}
  `,
);
