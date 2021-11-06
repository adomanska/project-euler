import { getRecurringCycle } from '..';

describe('getRecurringCycle', () => {
  const testCases: [number, number | null][] = [
    [2, null],
    [3, 3],
    [4, null],
    [5, null],
    [6, 6],
    [7, 142857],
    [8, null],
    [9, 1],
    [10, null],
  ];

  testCases.forEach(([d, expectedCycle]) => it(`should return ${expectedCycle} for ${d}`, () => {
    const recurringCycle = getRecurringCycle(d);

    expect(recurringCycle).toEqual(expectedCycle);
  }));
});
