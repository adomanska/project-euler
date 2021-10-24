import { getAbundantNumbers, solve } from '..';

describe('getAbundantNumbers', () => {
  it('should return abundant numbers or given maximum (exclusive)', () => {
    const max = 25;

    const abundantNumbers = getAbundantNumbers(max);

    expect(abundantNumbers).toEqual([12, 18, 20, 24]);
  });
});

describe('solve', () => {
  it('should return sum of non-abundant sums for given max', () => {
    const max = 25;

    const result = solve(max);

    expect(result).toEqual(301);
  });
});
