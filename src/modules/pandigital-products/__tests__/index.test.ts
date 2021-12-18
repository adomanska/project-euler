import { isPandigitalProduct } from '..';

describe('isPandigitalProduct', () => {
  it('should return true for pandigital product', () => {
    const result = isPandigitalProduct(39, 186, 7254);

    expect(result).toBeTruthy();
  });

  it('should return false for non-pandigital product', () => {
    const result = isPandigitalProduct(2, 3627, 7254);

    expect(result).toBeFalsy();
  });
});
