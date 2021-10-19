import { readFileSync } from 'fs';

export default (path) => {
  const data = readFileSync(path);

  return data.toString().split('\n');
};
