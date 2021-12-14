import { solve } from '..';

describe('solve', () => {
  it('should return 15 for max equal 5', () => {
    const result = solve(5);

    expect(result).toEqual(15);
  });
});
