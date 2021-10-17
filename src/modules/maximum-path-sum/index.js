export const parseData = (rawData) => rawData
  .map((row) => row.split(' ').map((value) => Number(value)));

export const solve = (data) => data
  .reverse()
  .reduce(
    (acc, current) => current.map((value, index) => value + Math.max(acc[index], acc[index + 1])),
  )[0];

const solveProblem = (rawData) => solve(parseData(rawData)).toString();

export default solveProblem;
