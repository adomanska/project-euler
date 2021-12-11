import { eratostenesSieve, solve } from '..';

describe('erathosthenesSieve', () => {
  it('should return primes lookup table for given limit', () => {
    const max = 10;

    const result = eratostenesSieve(max);

    expect(result).toEqual([
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
    ]);
  });
});

describe('solve', () => {
  it('should return -126479 for max equals 1601', () => {
    const result = solve(1601);

    expect(result).toEqual(-126479);
  });
});
