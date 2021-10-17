export const parseData = (rawData: string[]) => rawData
  .map((row) => row.split(' ').map((value) => Number(value)));

export const solve = (data: number[][]) => data
  .reverse()
  .reduce(
    (acc, current) => current.map((value, index) => value + Math.max(acc[index], acc[index + 1])),
  )[0];
