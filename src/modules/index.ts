import * as maximumPathSum from './maximum-path-sum';

type Solver = (rawData: string[]) => string;

const config: Record<string, Solver> = {
  'maximum-path-sum': maximumPathSum.default,
};

export default config;
