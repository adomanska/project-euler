import { parseData } from '..';

describe('parseData', () => {
  it('should parse two lines of dates', () => {
    const rawData = [
      '1 Jan 1901',
      '31 Dec 2000',
    ];

    const data = parseData(rawData);

    expect(data).toEqual({
      dateFrom: new Date('1901-01-01T00:00:00.000Z'),
      dateTo: new Date('2000-12-31T00:00:00.000Z'),
    });
  });
});
