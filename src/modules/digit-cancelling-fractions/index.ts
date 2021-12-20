import range from '../../common/range';

const flat = <T>(acc: T[], cur: T[]): T[] => acc.concat(cur);

export const combinations = (start: number, stop: number, count: number): number[][] => {
  const elements = new Array(count);
  elements.fill(range(start, stop));

  return elements.reduce((acc, cur) => cur
    .map((element: number) => acc
      .map((partialCombination: number[]) => [...partialCombination, element]))
    .reduce(flat), [[]]);
};

const isDigitCancellingFraction = (x: number, y: number, z: number) => {
  if (y !== 0 && z !== 0) {
    if (x !== 0 && (10 * x + z) / (10 * y + z) === x / y) {
      return true;
    }

    if (x !== 0 && (10 * x + z) / (10 * z + y) === x / y) {
      return true;
    }

    if ((10 * z + x) / (10 * y + z) === x / y) {
      return true;
    }

    if ((10 * z + x) / (10 * z + y) === x / y) {
      return true;
    }
  }

  return false;
};

export const getDigitCancellingFractions = (): number[][] => {
  const solutionSpace = combinations(0, 9, 3);

  return solutionSpace
    .filter(([x, y]) => x < y)
    .filter(([x, y, z]) => isDigitCancellingFraction(x, y, z))
    .map(([x, y]) => [x, y]);
};

export const reduceFraction = (numerator: number, denominator: number) => {
  let divider = 2;
  let curNumerator = numerator;
  let curDenominator = denominator;
  const maxDivider = Math.min(numerator, denominator);

  while (divider <= maxDivider) {
    if (curNumerator % divider === 0 && curDenominator % divider === 0) {
      curNumerator /= divider;
      curDenominator /= divider;
    } else {
      divider += 1;
    }
  }

  return [curNumerator, curDenominator];
};

const solve = () => {
  const [numerator, denominator] = getDigitCancellingFractions()
    .reduce(([x, y], [curX, curY]) => [x * curX, y * curY]);

  const [, reducedDenominator] = reduceFraction(numerator, denominator);

  return reducedDenominator;
};

const solveProblem = (rawData: string[]) => solve().toString();

export default solveProblem;
