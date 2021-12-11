import parseData from '../../common/parse-single-number';

interface Candidate {
  b: number;
  a: number[];
}

export const range = (start: number, stop: number) => Array.from(new Array(stop - start + 1).keys())
  .map((value) => value + start);

export const eratostenesSieve = (max: number) => {
  const result = new Array(max + 1);
  result.fill(true);
  result[0] = false;
  result[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i += 1) {
    if (result[i]) {
      for (let j = i * i; j <= max; j += i) {
        result[j] = false;
      }
    }
  }

  return result;
};

const notUndefined = (candidate: Candidate | undefined): candidate is Candidate => !!candidate;

const isValidA = (b: number, n: number, primes: boolean[]) => (a: number) => (
  primes[n * n + a * n + b]
);

const filterCandidates = (candidates: Candidate[], n: number, primes: boolean[]) => candidates
  .map(({ b, a }) => ({ b, a: a.filter(isValidA(b, n, primes)) }))
  .filter(({ a }) => a.length > 0);

export const solve = (max: number) => {
  const isPrime = eratostenesSieve(2 * max * max + max);

  let candidates = isPrime
    .slice(0, max + 1)
    .map((value, index) => (
      value ? ({
        b: index,
        a: range(-(max - 1), max - 1),
      }) : undefined))
    .filter(notUndefined);
  let newCandiates = candidates;
  let n = 1;

  while (newCandiates.length) {
    candidates = newCandiates;
    newCandiates = filterCandidates(candidates, n, isPrime);
    n += 1;
  }

  const { b, a: [firstA] } = candidates[0];

  return b * firstA;
};

const solveProblem = (rawData: string[]) => solve(parseData(rawData)).toString();

export default solveProblem;
