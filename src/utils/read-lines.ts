import { readFileSync } from 'fs';

export default (path: string) => {
  const data = readFileSync(path);

  return data.toString().split('\n');
};
