import parseData from '../../common/parse-single-number';

export const bigNumbersSum = (a: number[], b: number[]) => {
  let longer = a;
  let shorter = b;
  const result = [];

  if (b.length > a.length) {
    longer = b;
    shorter = a;
  }

  const lengthDiff = longer.length - shorter.length;
  const rest = longer.reduceRight((acc, digit, index) => {
    const sum = digit + (shorter[index - lengthDiff] || 0) + acc;
    result.push(sum % 10);
    return Math.floor(sum / 10);
  }, 0);

  if (rest > 0) {
    result.push(rest);
  }

  return result.reverse();
};

export const solve = (digits: number) => {
  return digits;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
