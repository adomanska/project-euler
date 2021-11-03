import { bigNumbersSum } from '..';

describe('bigNumbersSum', () => {
  it('should return correct sum of numbers given in vectors of same length', () => {
    const firstNumber = [4, 2, 2];
    const secondNumber = [6, 0, 9];

    const result = bigNumbersSum(firstNumber, secondNumber);

    expect(result).toEqual([1, 0, 3, 1]);
  });

  it('should return correct sum of numbers given in vectors when second is longest', () => {
    const firstNumber = [4, 2, 2];
    const secondNumber = [1, 6, 0, 9];

    const result = bigNumbersSum(firstNumber, secondNumber);

    expect(result).toEqual([2, 0, 3, 1]);
  });
});
