import parseData from '../../common/parse-single-number';

export const solve = (max: number) => {
  const distinctPowers = new Array(max + 1);
  distinctPowers.fill(0);

  for (let index = 2; index <= max; index += 1) {
    distinctPowers[index] += (max - 1);
    for (let power = 2; index ** power <= max; power += 1) {
      distinctPowers[index ** power] -= (Math.floor(max / power) - 1);
    }
  }

  return distinctPowers.reduce((acc, cur) => acc + cur);
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
