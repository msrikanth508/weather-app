import React from 'react';
import styled from 'styled-components';

import { SunIcon } from '../Icons';

const Loading = styled.div`
  animation: spin 5000ms infinite linear;
  text-align: center;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return (
    <Loading data-testid="loader">
      <SunIcon size={150} />
    </Loading>
  );
}
