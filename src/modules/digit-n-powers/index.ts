import parseData from '../../common/parse-single-number';
import range from '../../common/range';

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
    for (let newDigit = 0; newDigit < 10; newDigit += 1) {
      total += solveRec(newNumber, newSum, newDigit, depth + 1, power);
    }
  }

  return total;
};

const solveNaive = (power: number) => {
  const values = range(10, 10 ** (power + 1));
  const getPowersSum = digitPowersSum(power);

  return values
    .filter((value) => value === getPowersSum(value))
    .reduce((acc, cur) => acc + cur);
};

export const solve = (power: number) => range(0, 9)
  .reduce((acc, lastDigit) => acc + solveRec(0, 0, lastDigit, 0, power), 0);

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
