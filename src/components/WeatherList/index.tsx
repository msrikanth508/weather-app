import React from 'react';
import styled from 'styled-components';
import { getTimeinHours } from '../../utils/dateFormatter';
import TempIndicator from '../TempIndicator';
import ClimateIcon from '../ClimateIcon';
import { WeatherItemShape } from '../../types';

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
  white-space: nowrap;
`;

const ListItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: ${({ theme }) => theme.space[24]};
  margin-right: ${({ theme }) => theme.space[16]};
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : 'inherit'};
  border-radius: ${({ isActive }) => (isActive ? '6px' : 0)};

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    border-radius: 6px;
  }
`;

const Date = styled.span`
  margin-bottom: ${({ theme }) => theme.space[24]};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const Temperature = styled(TempIndicator)`
  margin-top: ${({ theme }) => theme.space[24]};
`;

type Props = {
  data: WeatherItemShape[];
  activeWeatherId: number;
  onSelect: (e: WeatherItemShape) => void;
};

export default function WeatherList({
  data,
  activeWeatherId,
  onSelect,
}: Props) {
  return (
    <List>
      {(data || []).map((item) => (
        <ListItem
          key={item.id}
          isActive={item.id === activeWeatherId}
          onClick={() => onSelect(item)}
        >
          <Date>{getTimeinHours(item.date)}</Date>
          <ClimateIcon isCloudy={item.isCloudy} />
          <Temperature value={item.temp.val} />
        </ListItem>
      ))}
    </List>
  );
}
