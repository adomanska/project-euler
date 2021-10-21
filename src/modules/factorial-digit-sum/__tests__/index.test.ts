import { factorial, multiply, solve } from '..';

describe('multiply', () => {
  it('should return correct result for one-digit multiplier', () => {
    const value = [1, 2, 3];
    const multiplier = 9;

    const result = multiply(value, multiplier);

    expect(result).toEqual([1, 1, 0, 7]);
  });

  it('should return correct result for two-digit multiplier', () => {
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
