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
};

export default config;
