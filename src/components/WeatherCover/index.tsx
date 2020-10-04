import React from 'react';
import styled from 'styled-components';
import { getDay, getMonth, getDate } from '../../utils/dateFormatter';
import TempIndicator from '../TempIndicator';
import ClimateIcon from '../ClimateIcon';
import { WeatherItemShape } from '../../types';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.space[24]};
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FlexBox = styled.div<{
  flexDirection?: string;
  justifyContent?: string;
  margin?: number;
}>`
  display: flex;
  align-content: center;
  flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  margin: ${({ theme, margin = 16 }) => `0 ${theme.space[margin]}`};
`;

const H3 = styled.h3`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  line-height: 1.3;
`;

const Temp = styled(TempIndicator)<{ textAlign: string }>`
  font-size: 3rem;
  margin: 0;
  padding: 0;
  font-weight: 500;
  text-align: ${({ textAlign }) => textAlign || 'left'};

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;

const GrayText = styled.span`
  padding-bottom: ${({ theme }) => theme.space[8]};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const TempMaxMin = styled(TempIndicator)`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 1rem;
  font-weight: 500;
`;

const InfoSection = styled(FlexBox)`
  margin-bottom: ${({ theme }) => theme.space[24]};

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  width: 120px;
`;

const ReadingSection = styled(FlexBox)`
  width: 125px;
`;

type Props = {
  activeWeatherItem?: WeatherItemShape;
  cityName: string;
};

export default function WeatherCover({ activeWeatherItem, cityName }: Props) {
  if (activeWeatherItem)
    return (
      <Section>
        <FlexBox flexDirection="row">
          <IconWrapper>
            <ClimateIcon isCloudy={activeWeatherItem.isCloudy} size={120} />
          </IconWrapper>
          <FlexBox>
            <ReadingSection
              flexDirection="row"
              margin={0}
              justifyContent="space-between"
            >
              <GrayText>
                {activeWeatherItem.isCloudy ? 'Cloudy' : 'Clear'}
              </GrayText>
              <GrayText>
                <TempMaxMin value={activeWeatherItem.temp.max} />
                {' / '}
                <TempMaxMin value={activeWeatherItem.temp.min} />
              </GrayText>
            </ReadingSection>
            <Temp value={activeWeatherItem.temp.val} textAlign="center" />
          </FlexBox>
        </FlexBox>
        <InfoSection>
          <GrayText>{cityName}</GrayText>
          <H3>{getDay(activeWeatherItem.date)}</H3>
          <H3>
            {`${getDate(activeWeatherItem.date)}. ${getMonth(
              activeWeatherItem.date
            )}`}
          </H3>
        </InfoSection>
      </Section>
    );

  return null;
}
