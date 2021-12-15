import parseData from '../../common/parse-single-number';
import range from '../../common/range';

const digitPowersSum = (power: number) => (value: number) => value
  .toString()
  .split('')
  .map(Number)
  .reduce((acc, cur) => acc + cur ** power, 0);

export const solve = (power: number) => {
  const values = range(10, 10 ** power);
  const getPowersSum = digitPowersSum(power);

  return values
    .filter((value) => value === getPowersSum(value))
    .reduce((acc, cur) => acc + cur);
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
