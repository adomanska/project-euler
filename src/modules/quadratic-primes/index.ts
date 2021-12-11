import parseData from '../../common/parse-single-number';

export const eratostenesSieve = (max: number) => {
  const result = new Array(max + 1);
  result.fill(true);
  result[0] = false;
  result[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i += 1) {
    if (result[i]) {
      for (let j = i * i; j <= max; j += i) {
        result[j] = false;
      }
    }
  }

  return result;
};

const solve = (max: number) => 0;

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
