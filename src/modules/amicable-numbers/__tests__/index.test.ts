import { getDividersSum } from '..';

describe('getDividersSum', () => {
  it('should return correct sum of dividers for given number', () => {
    const value = 284;

    const sumOfDividers = getDividersSum(value + 1).pop();

    expect(sumOfDividers).toEqual(220);
  });
});
