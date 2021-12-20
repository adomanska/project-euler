import { combinations, getDigitCancellingFractions, reduceFraction } from '..';

describe('combinations', () => {
  it('should return valid 1-element combination for given start and stop', () => {
    const result = combinations(1, 3, 1);

    expect(result).toEqual([
      [1],
      [2],
      [3],
    ]);
  });

  it('should return valid 2-element combination for given start and stop', () => {
    const result = combinations(1, 3, 2);

    expect(result).toEqual([
      [1, 1],
      [2, 1],
      [3, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3],
    ]);
  });
});

describe('getDigitCancellingFractions', () => {
  it('should return 4-elements including 4 / 8', () => {
    const result = getDigitCancellingFractions();

    expect(result).toHaveLength(4);
    expect(result.some(([x, y]) => x === 4 && y === 8)).toBeTruthy();
  });
});

describe('reduceFraction', () => {
  const testCases = [
    [[4, 6], [2, 3]],
    [[49, 98], [1, 2]],
    [[18, 42], [3, 7]],
  ];

  testCases.forEach(([[numerator, denominator], expected]) => it(`should return correct reduced ${numerator} / ${denominator}`, () => {
    const result = reduceFraction(numerator, denominator);

    expect(result).toEqual(expected);
  }));
});
