import { getRecurringCycle, solve } from '..';

describe('getRecurringCycle', () => {
  const testCases: [number, string | null][] = [
    [2, null],
    [3, '3'],
    [4, null],
    [5, null],
    [6, '6'],
    [7, '142857'],
    [8, null],
    [9, '1'],
    [10, null],
  ];

  testCases.forEach(([d, expectedCycle]) => it(`should return ${expectedCycle} for ${d}`, () => {
    const recurringCycle = getRecurringCycle(d);

    expect(recurringCycle).toEqual(expectedCycle);
  }));
});

describe('solve', () => {
  const testCases = [
    [2, 1],
    [5, 3],
    [10, 7],
  ];

  testCases.forEach(([max, expected]) => it(`should return ${expected} for ${max}`, () => {
    const maxRecurringCycleId = solve(max);

    expect(maxRecurringCycleId).toEqual(expected);
  }));
});
