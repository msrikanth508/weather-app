import { getDate, getDay, getMonth, getTimeinHours } from './dateFormatter';

describe('dateFormatter', () => {
  it('should return hours from the date', () => {
    expect(getTimeinHours(new Date('2017-02-16 12:00:00'))).toEqual('12:00');
    expect(getTimeinHours(new Date('2017-02-16 00:00:00'))).toEqual('00:00');
    expect(getTimeinHours(new Date('2017-02-16 24:00:00'))).toEqual('00:00');
  });

  it('should return day of the date', () => {
    expect(getDay(new Date('2017-02-16 12:00:00'))).toEqual('Thursday');
    expect(getDay(new Date('2020-02-16 00:00:00'))).toEqual('Sunday');
  });

  it('should return month of the date', () => {
    expect(getMonth(new Date('2017-02-16 12:00:00'))).toEqual('February');
  });

  it('should return date', () => {
    expect(getDate(new Date('2017-02-16 12:00:00'))).toEqual('16');
  });
});
