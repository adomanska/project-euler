import range from '../range';

describe('range', () => {
  it('should return range for given start and stop', () => {
    const result = range(3, 6);

    expect(result).toEqual([3, 4, 5, 6]);
  });

  it('should return empty array when start > stop', () => {
    const result = range(3, 2);

    expect(result).toEqual([]);
  });
});
