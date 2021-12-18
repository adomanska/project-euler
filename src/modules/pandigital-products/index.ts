import range from '../../common/range';

export const isPandigitalCandidate = (value: number) => {
  const valueAsString = value.toString();
  const initialUsedDigits: Record<string, boolean> = {};

  const usedDigits = valueAsString.split('')
    .reduce((acc, digit) => {
      acc[digit] = true;
      return acc;
    }, initialUsedDigits);

  return usedDigits[0] !== true && Object.keys(usedDigits).length === valueAsString.length;
};

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

const searchForPandigitalProducts = (
  pandigitalProducts: Set<number>,
  product: number,
  multiplicants: number[],
) => {
  if (isPandigitalCandidate(product)) {
    let index = 0;

    while (index < multiplicants.length) {
      const multiplicant = multiplicants[index];

      if (product % multiplicant === 0) {
        if (isPandigitalProduct(multiplicant, product / multiplicant, product)) {
          pandigitalProducts.add(product);
          break;
        }
      }

      index += 1;
    }
  }
};

const solve = () => {
  // Costants determined by checking ranges of product
  const min = 1476;
  const mid = 2690;
  const max = 9876;

  const pandigitalProducts = new Set<number>();
  const twoDigitMultiplicants = range(12, 98).filter(isPandigitalCandidate);
  const multiplicants = [1, 2, 3, 4, 5, 6, 7, 8, 9, ...twoDigitMultiplicants];

  // Check products matching pattern:
  // 2-digit x 3-digit = 4-digit
  for (let product = min; product < mid; product += 1) {
    searchForPandigitalProducts(pandigitalProducts, product, twoDigitMultiplicants);
  }

  // Check products matching pattern:
  // 1-digit x 4-digit = 4-digit
  // or
  // 2-digit x 3-digit = 4-digit
  for (let product = mid; product <= max; product += 1) {
    searchForPandigitalProducts(pandigitalProducts, product, multiplicants);
  }

  return Array.from(pandigitalProducts).reduce((acc, cur) => acc + cur);
};

const solveProblem = (rawData: string[]) => solve().toString();

export default solveProblem;
