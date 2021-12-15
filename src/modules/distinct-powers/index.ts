import parseData from '../../common/parse-single-number';
import range from '../../common/range';

export const solve = (max: number) => {
  const values = range(2, max);

  const results = values.reduce(
    (powers, value) => powers.concat(values.map((power) => value ** power)),
    new Array<number>(),
  );

  return new Set(results).size;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
