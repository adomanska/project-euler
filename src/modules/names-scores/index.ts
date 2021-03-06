const CHAR_CODE_DIFF = 'A'.charCodeAt(0) - 1;

export const parseData = (rawData: string[]) => rawData[0]
  .split(',')
  .map((name) => name.slice(1, name.length - 1));

export const getAlphabeticalValue = (value: string) => value
  .split('')
  .map((char) => char.charCodeAt(0) - CHAR_CODE_DIFF)
  .reduce((acc, charValue) => acc + charValue);

const solve = (data: string[]) => data
  .sort()
  .reduce((acc, name, index) => acc + getAlphabeticalValue(name) * (index + 1), 0);

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
