export const parseData = (rawData: string[]) => Number(rawData[0]);

const factorial = (value: number) => {
  let result = 1;
  let multiplier = 1;

  while (multiplier <= value) {
    result *= multiplier;
    multiplier += 1;
  }

  return result;
};

export const solve = (data: number) => factorial(data)
  .toString()
  .split('')
  .reduce((acc, digit) => acc + Number(digit), 0);

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
