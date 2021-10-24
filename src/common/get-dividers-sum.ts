export default (max: number) => {
  const dividersSum = new Array(max).fill(1);
  dividersSum[0] = 0;

  for (let divider = 2; divider < max; divider += 1) {
    for (let index = 2 * divider; index < max; index += divider) {
      dividersSum[index] += divider;
    }
  }

  return dividersSum;
};
