import React from 'react';
import { CloudIcon, SunIcon } from '../Icons';

type Props = {
  isCloudy: boolean;
  size?: number;
};

export default function ClimateIcon({ isCloudy, size = 60 }: Props) {
  return (
    <>
      {isCloudy ? (
        <CloudIcon size={size} data-testid="cloud" />
      ) : (
        <SunIcon size={size} data-testid="sun" />
      )}
    </>
  );
}
