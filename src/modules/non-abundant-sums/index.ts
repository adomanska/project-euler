import parseData from '../../common/parse-single-number';
import getDividersSum from '../../common/get-dividers-sum';

export const getAbundantNumbers = (max: number) => getDividersSum(max)
  .map((sum, index) => ({ sum, index }))
  .filter(({ sum, index }) => sum > index)
  .map(({ index }) => index);

export const solve = (max: number) => {
  const abundantNumbers = getAbundantNumbers(max + 1);
  const totalSum = ((1 + max) * max) / 2;
  const abundantSums = abundantNumbers
    .flatMap((first, index, array) => array
      .slice(index)
      .map((second) => first + second))
    .filter((sum) => sum <= max);
  const abundantSumsSum = [...new Set(abundantSums)]
    .reduce((acc, cur) => acc + cur);

  return totalSum - abundantSumsSum;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
