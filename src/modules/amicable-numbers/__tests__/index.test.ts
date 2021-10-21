import { getDividersSum } from '..';

describe('getDividersSum', () => {
  it('should return correct sum of dividers for given number', () => {
    const max = 285;

    const dividersSum = getDividersSum(max);

    expect(dividersSum[220]).toEqual(284);
    expect(dividersSum[284]).toEqual(220);
  });
});
