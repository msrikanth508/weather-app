import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => `${theme.space[24]} ${theme.space[16]}`};
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <GlobalStyles />
        <Home />
      </Main>
    </ThemeProvider>
  );
}
