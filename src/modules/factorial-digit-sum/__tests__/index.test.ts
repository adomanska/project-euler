import {
  factorial, multiply, parseData, solve,
} from '..';

describe('parseData', () => {
  it('should parse input number', () => {
    const rawData = ['10'];

    const data = parseData(rawData);

    expect(data).toEqual(10);
  });
});

describe('multiply', () => {
  it('should retur correct result for one-digit multiplier', () => {
    const value = [1, 2, 3];
    const multiplier = 9;

    const result = multiply(value, multiplier);

    expect(result).toEqual([1, 1, 0, 7]);
  });

  it('should retur correct result for two-digit multiplier', () => {
    const value = [1, 2, 3];
    const multiplier = 89;

    const result = multiply(value, multiplier);

    expect(result).toEqual([1, 0, 9, 4, 7]);
  });
});

describe('factorial', () => {
  it('should return factorial as vector for given number', () => {
    const data = 10;

    const result = factorial(data);

    expect(result).toEqual([3, 6, 2, 8, 8, 0, 0]);
  });
});

describe('solve', () => {
  it('should return sum of digits of factorial for given number', () => {
    const data = 10;

    const result = solve(data);

    expect(result).toEqual(27);
  });
});
