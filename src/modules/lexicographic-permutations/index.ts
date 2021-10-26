interface Data {
  elements: string[];
  index: number;
}

export const parseData = (rawData: string[]) => {
  const elements = rawData[0].split(',');
  const index = Number(rawData[1]);

  return { elements, index };
};

const factorial = (value: number) => {
  let result = 1;
  let multiplier = 2;

  while (multiplier <= value) {
    result *= multiplier;
    multiplier += 1;
  }

  return result;
};

export const solve = ({ elements, index }: Data) => {
  let sortedElements = elements.sort();
  let rest = index - 1;
  let counter = sortedElements.length - 1;
  let size = factorial(counter);
  let result = '';

  while (counter >= 0) {
    const chunk = sortedElements[Math.floor(rest / size)];
    result += chunk;

    sortedElements = sortedElements.filter((element) => element !== chunk);
    rest %= size;
    size /= counter;
    counter -= 1;
  }

  return result;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData));

export default solveProblem;
