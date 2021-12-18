export const isPandigitalProduct = (multiplicant: number, multiplier: number, product: number) => {
  const initialUsedDigits: Record<string, boolean> = {};

  const usedDigits = [multiplicant, multiplier, product]
    .map((value) => value.toString().split(''))
    .reduce((acc, digits) => {
      digits.forEach((digit) => { acc[digit] = true; });
      return acc;
    }, initialUsedDigits);

  return usedDigits[0] !== true && Object.keys(usedDigits).length === 9;
};

const solve = () => { return 0; };

const solveProblem = (rawData: string[]) => solve().toString();

export default solveProblem;
