import { solve } from '..';

describe('solve', () => {
  it('should return x for 5', () => {
    const result = solve(5);

    expect(result).toEqual(4);
  });
});
