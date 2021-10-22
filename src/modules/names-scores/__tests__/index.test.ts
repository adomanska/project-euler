import { getAlphabeticalValue, parseData } from '..';

describe('parseData', () => {
  it('should return collection of string with double quotes removed', () => {
    const rawData = ['"MARY","PATRICIA","LINDA"'];

    const data = parseData(rawData);

    expect(data).toEqual([
      'MARY',
      'PATRICIA',
      'LINDA',
    ]);
  });
});

describe('getAlphabeticalValue', () => {
  it('should return valid value for given string', () => {
    const value = 'COLIN';

    const alphabeticalValue = getAlphabeticalValue(value);

    expect(alphabeticalValue).toEqual(53);
  });
});
