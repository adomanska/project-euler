import parseData from '../../common/parse-single-number';

export const solve = (size: number) => {
  if (size % 2 === 0 || size < 1) {
    throw Error('Size should be postive odd number');
  }

  let result = 1;
  let currentSize = 1;

  while (currentSize < size) {
    currentSize += 2;
    result += 4 * (currentSize - 2) ** 2 + 10 * (currentSize - 1);
  }

  return result;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
