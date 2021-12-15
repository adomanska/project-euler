export default (start: number, stop: number) => {
  const length = stop - start + 1;

  if (length <= 0) return [];

  return Array.from(new Array(length).keys())
    .map((value) => value + start);
};
