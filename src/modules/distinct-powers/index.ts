import parseData from '../../common/parse-single-number';

export const solve = (max: number) => {
  let duplicatesCount = 0;

  for (let index = 2; index <= max; index += 1) {
    for (let power = 2; index ** power <= max; power += 1) {
      duplicatesCount += (Math.floor(max / power) - 1);
    }
  }

  return (max - 1) ** 2 - duplicatesCount;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
