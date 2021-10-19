import { Command } from 'commander';
import * as modulesConfig from './modules';
import readLines from './utils/read-lines';

const fetchSolution = (problemId: string, dataPath: string) => {
  const solve = modulesConfig.default[problemId];
  const rawData = readLines(dataPath);

  console.log(solve(rawData));
};

const program = new Command();

program
  .version('1.0.0')
  .description('Command line Application For Fetching Project Euler Solutions');

program
  .argument('<problemId>', 'problem id')
  .argument('[dataPath]', 'path to data file', 'invalid file')
  .action(fetchSolution);

program.parse(process.argv);
