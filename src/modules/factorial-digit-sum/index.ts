export const parseData = (rawData: string[]) => Number(rawData[0]);

export const multiply = (value: number[], multiplier: number) => {
  const result = [];

  const res = value.reduceRight((acc, digit) => {
    const tmp = digit * multiplier + acc;
    result.unshift(tmp % 10);
    return Math.floor(tmp / 10);
  }, 0);

  if (res !== 0) {
    const resDigits = res
      .toString()
      .split('')
      .map((digit) => Number(digit));
    result.unshift(...resDigits);
  }

  return result;
};

export const factorial = (value: number) => {
  let result = [1];
  let multiplier = 2;

  while (multiplier <= value) {
    result = multiply(result, multiplier);
    multiplier += 1;
  }

  return result;
};

export const solve = (data: number) => factorial(data)
  .reduce((acc, digit) => acc + digit, 0);

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
