import parseData from '../../common/parse-single-number';

export const getDividersSum = (max: number) => {
  const dividersSum = new Array(max).fill(1);
  dividersSum[0] = 0;

  for (let divider = 2; divider < max; divider += 1) {
    for (let index = 2 * divider; index < max; index += divider) {
      dividersSum[index] += divider;
    }
  }

  return dividersSum;
};

export const solve = (max: number) => getDividersSum(max)
  .filter((sum, index, dividersSum) => dividersSum[sum] === index && index !== sum)
  .reduce((acc, current) => acc + current);

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
