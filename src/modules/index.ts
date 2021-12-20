import maximumPathSum from './maximum-path-sum';
import countingSundays from './counting-sundays';
import factorialDigitSum from './factorial-digit-sum';
import amicableNumbers from './amicable-numbers';
import namesScores from './names-scores';
import nonAbundantSums from './non-abundant-sums';
import lexicographicPermutations from './lexicographic-permutations';
import nDigitFibonacciNumber from './n-digit-fibonacci-number';
import reciprocalCycle from './reciprocal-cycle';
import quadraticPrimes from './quadratic-primes';
import numberSpiralDiagonals from './number-spiral-diagonals';
import distinctPowers from './distinct-powers';
import digitNPowers from './digit-n-powers';
import coinSums from './coin-sums';
import pandigitalProducts from './pandigital-products';
import digitCancellingFractions from './digit-cancelling-fractions';

type Solver = (rawData: string[]) => string;

const config: Record<string, Solver> = {
  'maximum-path-sum': maximumPathSum,
  'counting-sundays': countingSundays,
  'factorial-digit-sum': factorialDigitSum,
  'amicable-numbers': amicableNumbers,
  'names-scores': namesScores,
  'non-abundant-sums': nonAbundantSums,
  'lexicographic-permutations': lexicographicPermutations,
  'n-digit-fibonacci-number': nDigitFibonacciNumber,
  'reciprocal-cycle': reciprocalCycle,
  'quadratic-primes': quadraticPrimes,
  'number-spiral-diagonals': numberSpiralDiagonals,
  'distinct-powers': distinctPowers,
  'digit-n-powers': digitNPowers,
  'coin-sums': coinSums,
  'pandigital-products': pandigitalProducts,
  'digit-cancelling-fractions': digitCancellingFractions,
};

export default config;
