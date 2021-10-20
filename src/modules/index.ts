import * as maximumPathSum from './maximum-path-sum';
import * as countingSundays from './counting-sundays';

type Solver = (rawData: string[]) => string;

const config: Record<string, Solver> = {
  'maximum-path-sum': maximumPathSum.default,
  'counting-sundays': countingSundays.default,
};

export default config;
