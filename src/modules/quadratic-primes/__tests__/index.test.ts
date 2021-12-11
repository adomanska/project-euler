import { eratostenesSieve } from '..';

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
