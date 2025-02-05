'use client';

import { createGlobalStyle, styled } from '@unimake-ui/react';

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;

export const Body = styled.body`
  background-color: ${props => props.theme.colors.gray100};
  height: 100vh;
`;
