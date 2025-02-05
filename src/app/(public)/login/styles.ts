'use client';

import { Box, styled } from '@unimake-ui/react';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Header = styled.header`
  text-align: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Form = styled(Box)`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  min-height: 448px;
  max-height: 90vh;
`;

export const RememberMeBox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
