import parseData from '../../common/parse-single-number';
import getDividersSum from '../../common/get-dividers-sum';

export const solve = (max: number) => getDividersSum(max)
  .filter((sum, index, dividersSum) => dividersSum[sum] === index && index !== sum)
  .reduce((acc, current) => acc + current);

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
