interface Data {
  yearFrom: number;
  yearTo: number;
}

export const parseData = (rawData: string[]) => {
  const yearFrom = Number(rawData[0]);
  const yearTo = Number(rawData[1]);

  return { yearFrom, yearTo };
};

export const solve = ({ yearFrom, yearTo }: Data) => {
  const monthsCount = (yearTo - yearFrom + 1) * 12;
  let counter = 0;

  for (let monthDiff = 0; monthDiff < monthsCount; monthDiff += 1) {
    const month = (monthDiff + 1) % 12;
    const year = yearFrom + monthDiff / 12;

    if (new Date(year, month, 1, 0, 0, 0).getDay() === 0) {
      counter += 1;
    }
  }

  return counter;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
