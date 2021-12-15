import parseData from '../../common/parse-single-number';
import range from '../../common/range';

const sum = (acc: number, cur: number) => acc + cur;

const digitPowersSum = (power: number) => (value: number) => value
  .toString()
  .split('')
  .map(Number)
  .reduce((acc, cur) => acc + cur ** power, 0);

const solveRec = (
  curNumber: number, curSum: number, digit: number, depth: number, power: number,
) => {
  const newNumber = curNumber + (10 ** depth) * digit;
  const newSum = curSum + digit ** power;
  let total = 0;

  if (digit !== 0 && newNumber === newSum && depth > 0) {
    total += newNumber;
  }

  if (depth <= power) {
    total += range(0, 9)
      .map((nextDigit) => solveRec(newNumber, newSum, nextDigit, depth + 1, power))
      .reduce(sum);
  }

  return total;
};

const solveNaive = (power: number) => {
  const values = range(10, 10 ** (power + 1));
  const getPowersSum = digitPowersSum(power);

  return values
    .filter((value) => value === getPowersSum(value))
    .reduce(sum);
};

export const solve = (power: number) => range(0, 9)
  .map((lastDigit) => solveRec(0, 0, lastDigit, 0, power))
  .reduce(sum);

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
