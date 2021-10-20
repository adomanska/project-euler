import { parseData, solve } from '..';

describe('parseData', () => {
  it('should parse two lines of years', () => {
    const rawData = [
      '1901',
      '2000',
    ];

    const data = parseData(rawData);

    expect(data).toEqual({
      yearFrom: 1901,
      yearTo: 2000,
    });
  });
});

describe('solve', () => {
  it('should return correct number of Sunays on first day of month in given years', () => {
    const data = {
      yearFrom: 2020,
      yearTo: 2021,
    };

    const sundaysCount = solve(data);

    expect(sundaysCount).toEqual(3);
  });
});
