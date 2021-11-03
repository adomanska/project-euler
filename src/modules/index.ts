import maximumPathSum from './maximum-path-sum';
import countingSundays from './counting-sundays';
import factorialDigitSum from './factorial-digit-sum';
import amicableNumbers from './amicable-numbers';
import namesScores from './names-scores';
import nonAbundantSums from './non-abundant-sums';
import lexicographicPermutations from './lexicographic-permutations';
import nDigitFibonacciNumber from './n-digit-fibonacci-number';

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
};

export default config;
