import React from 'react';
import styled from 'styled-components';

const Temp = styled.span`
  font-weight: 700;
  font-size: 1.2rem;

  &::after {
    display: inline-block;
    content: '°';
  }
`;

type Props = {
  value: number;
  className?: string;
};

export default function TempIndicator({ value, className }: Props) {
  return <Temp className={className}>{value}</Temp>;
}
