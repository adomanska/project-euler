interface Data {
  dateFrom: Date;
  dateTo: Date;
}

export const parseData = (rawData: string[]) => {
  const timeConstant = '00:00:00 GMT';
  const dateFrom = new Date(`${rawData[0]} ${timeConstant}`);
  const dateTo = new Date(`${rawData[1]} ${timeConstant}`);

  return { dateFrom, dateTo };
};

export const solve = ({ dateFrom, dateTo }: Data) => 0;

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
