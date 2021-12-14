import { solve } from '..';

describe('solve', () => {
  it('should throw error for non-positive size', () => {
    expect(() => solve(-1)).toThrow();
  });

  it('should throw error for even size', () => {
    expect(() => solve(4)).toThrow();
  });

  it('should return valid result for size 5', () => {
    const result = solve(5);

    expect(result).toEqual(101);
  });
});
