import parseData from '../../common/parse-single-number';

export const getRecurringCycle = (d: number) => {
  let reminder = 1 % d;
  let result = '';
  const remindersStart = new Map();

  while (reminder !== 0 && !remindersStart.has(reminder)) {
    remindersStart.set(reminder, result.length);
    reminder *= 10;
    result += Math.floor(reminder / d);
    reminder %= d;
  }

  if (reminder !== 0 && remindersStart.has(reminder)) {
    return result.substr(remindersStart.get(reminder));
  }

  return null;
};

export const solve = (max: number) => {
  let maxCycleId = 1;
  let maxCycleLength = 0;

  for (let index = 2; index < max; index += 1) {
    const recurringCycle = getRecurringCycle(index);
    const cycleLength = !!recurringCycle && recurringCycle.length;

    if (!!cycleLength && cycleLength > maxCycleLength) {
      maxCycleLength = cycleLength;
      maxCycleId = index;
    }
  }

  return maxCycleId;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
