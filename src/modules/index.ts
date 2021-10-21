import * as maximumPathSum from './maximum-path-sum';
import * as countingSundays from './counting-sundays';
import * as factorialDigitSum from './factorial-digit-sum';

type Solver = (rawData: string[]) => string;

const config: Record<string, Solver> = {
  'maximum-path-sum': maximumPathSum.default,
  'counting-sundays': countingSundays.default,
  'factorial-digit-sum': factorialDigitSum.default,
};

export default config;
