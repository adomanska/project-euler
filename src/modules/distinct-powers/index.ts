import parseData from '../../common/parse-single-number';

const range = (start: number, stop: number) => Array.from(new Array(stop - start + 1).keys())
  .map((value) => value + start);

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
