import { parseData, solve } from '..';

describe('parseData', () => {
  it('should parse input number', () => {
    const rawData = ['10'];

    const data = parseData(rawData);

    expect(data).toEqual(10);
  });
});

describe('solve', () => {
  it('should return sum of digits of factorial for given number', () => {
    const data = 10;

    const result = solve(data);

    expect(result).toEqual(27);
  });
});
