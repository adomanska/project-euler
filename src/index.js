import { Command } from 'commander';

const fetchSolution = () => console.log('-- Solution will be displayed here --');

const program = new Command();

program
  .version('1.0.0')
  .description('Command line Application For Fetching Project Euler Solutions');

program
  .action(fetchSolution);

program.parse(process.argv);
