import { bigNumbersSum, solve } from '..';

describe('bigNumbersSum', () => {
  it('should return correct sum of numbers given as vectors of same length', () => {
    const firstNumber = [4, 2, 2];
    const secondNumber = [6, 0, 9];

    const result = bigNumbersSum(firstNumber, secondNumber);

    expect(result).toEqual([1, 0, 3, 1]);
  });

  it('should return correct sum of numbers given as vectors when second is longer', () => {
    const firstNumber = [4, 2, 2];
    const secondNumber = [1, 6, 0, 9];

    const result = bigNumbersSum(firstNumber, secondNumber);

    expect(result).toEqual([2, 0, 3, 1]);
  });
});

describe('solve', () => {
  const testCases = [
    [1, 1],
    [2, 7],
    [3, 12],
  ];

  testCases.forEach(([digits, expected]) => it(`should return ${expected} for ${digits} digit(s)`, () => {
    const result = solve(digits);

    expect(result).toEqual(expected);
  }));
});
