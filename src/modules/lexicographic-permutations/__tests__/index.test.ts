import { parseData, solve } from '..';

describe('parseData', () => {
  it('should return parsed data', () => {
    const rawData = [
      '0,1,2',
      '4',
    ];

    const data = parseData(rawData);

    expect(data).toEqual({
      elements: ['0', '1', '2'],
      index: 4,
    });
  });
});

describe('solve', () => {
  it('should return element of lexicographic permutation at given index', () => {
    const data = {
      elements: ['0', '1', '2'],
      index: 4,
    };

    const result = solve(data);

    expect(result).toEqual('120');
  });
});
