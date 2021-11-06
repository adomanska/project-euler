import parseData from '../../common/parse-single-number';

export const getRecurringCycle = (d: number) => {
  let reminder = 1 % d;
  let res = '';
  const remindersRes = new Map();

  while (reminder !== 0 && !remindersRes.has(reminder)) {
    remindersRes.set(reminder, res.length);
    reminder *= 10;
    res += Math.floor(reminder / d);
    reminder %= d;
  }

  if (reminder === 0) {
    return null;
  }

  if (remindersRes.has(reminder)) {
    return Number(res.substr(remindersRes.get(reminder)));
  }

  return null;
};

const getRecurringCycleForMultiple = (baseCycle: number | null, factor: number) => {
  if (baseCycle === null) return null;

  return null;
};

const solve = (max: number) => {
  if (max <= 2) {
    return 0;
  }

  const recurringCycles = new Array(max + 1);

  let maxCycleId = 0;
  let maxCycleLength = 0;

  for (let index = 2; index <= max; index += 1) {
    if (recurringCycles[index] === undefined) {
      recurringCycles[index] = getRecurringCycle(index);

      for (let factor = 2; factor * index <= max; factor += 1) {
        recurringCycles[factor * index] = getRecurringCycleForMultiple(
          recurringCycles[index],
          factor,
        );
      }
    }

    const cycleLength = !!recurringCycles[index] && recurringCycles[index].toString().length;

    if (!!cycleLength && cycleLength > maxCycleLength) {
      maxCycleLength = cycleLength;
      maxCycleId = index;
    }
  }

  return maxCycleId;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
