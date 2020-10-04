import reponseFormatter from './reponseFormatter';
import mockData from '../mockData';

describe('reponseFormatter', () => {
  it('should have correct data transformation from response', () => {
    const response = reponseFormatter([mockData.list[0]]);

    expect(response).toEqual([
      {
        date: new Date('2017-02-16T11:00:00.000Z'),
        id: 1487246400,
        isCloudy: false,
        temp: { max: 13, min: 8, val: 13 },
      },
    ]);
  });
});
