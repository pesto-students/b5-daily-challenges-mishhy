import { sumPrimes } from './sumPrimes';

describe('sumPrimes', () => {
  test('should return a number', () => {
    expect(typeof sumPrimes(10)).toEqual('number');
  });
  test('should return the correct output', () => {
    expect(sumPrimes(-1)).toBe(0);
    expect(sumPrimes(0)).toBe(0);
    expect(sumPrimes(1)).toBe(0);
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);
    expect(sumPrimes(9777)).toBe(5499476);
  });
  describe('bad arguments', () => {
    it('throws an exception when it is not passed any parameter', () => {
      expect(() => sumPrimes()).toThrowError(TypeError, /undefined is not a number/);
    });

    it('throws an exception when it is not passed second parameter', () => {
      expect(() => sumPrimes('2')).toThrowError(TypeError, /undefined is not a number/);
    });

    it('throws an exception when is not passed number as second parameter', () => {
      expect(() => sumPrimes('a')).toThrowError(TypeError, /a is not a number/);
    });
  });
});
