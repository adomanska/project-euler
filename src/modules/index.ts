import maximumPathSum from './maximum-path-sum';
import countingSundays from './counting-sundays';
import factorialDigitSum from './factorial-digit-sum';
import amicableNumbers from './amicable-numbers';

type Solver = (rawData: string[]) => string;

const config: Record<string, Solver> = {
  'maximum-path-sum': maximumPathSum,
  'counting-sundays': countingSundays,
  'factorial-digit-sum': factorialDigitSum,
  'amicable-numbers': amicableNumbers,
};

export default config;
