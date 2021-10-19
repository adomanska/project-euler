import { parseData, solve } from '..';

describe('parseData', () => {
  it('should parse strings with numbers', () => {
    const rawData = [
      '3',
      '7 4',
      '2 4 6',
      '8 5 9 3',
    ];

    const data = parseData(rawData);

    expect(data).toEqual([
      [3],
      [7, 4],
      [2, 4, 6],
      [8, 5, 9, 3],
    ]);
  });
});

describe('solve', () => {
  it('should return maximum path sum for given data', () => {
    const data = [
      [3],
      [7, 4],
      [2, 4, 6],
      [8, 5, 9, 3],
    ];

    const maxPathSum = solve(data);

    expect(maxPathSum).toEqual(23);
  });
});
