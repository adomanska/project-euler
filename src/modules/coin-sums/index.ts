import parseData from '../../common/parse-single-number';

const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const emptyCombinationConfig = () => Object.fromEntries(coins.map((coin) => [coin, 0]));

export const solve = (amount: number) => {
  const combinationsCount = [emptyCombinationConfig()];

  for (let curAmount = 1; curAmount <= amount; curAmount += 1) {
    const count = emptyCombinationConfig();

    if (coins.some((coin) => coin === curAmount)) {
      count[curAmount] = 1;
    }

    coins
      .filter((coin) => curAmount - coin > 0)
      .forEach((coin) => {
        const index = curAmount - coin;
        coins
          .filter((startCoin) => startCoin >= coin)
          .forEach((startCoin) => { count[coin] += combinationsCount[index][startCoin]; });
      });

    combinationsCount.push(count);
  }

  return Object.values(combinationsCount[amount])
    .reduce((acc, cur) => acc + cur);
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
