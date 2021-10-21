import parseSingleNumber from '../parse-single-number';

describe('parseSingleNumber', () => {
  it('should parse input number', () => {
    const rawData = ['10'];

    const data = parseSingleNumber(rawData);

    expect(data).toEqual(10);
  });
});
