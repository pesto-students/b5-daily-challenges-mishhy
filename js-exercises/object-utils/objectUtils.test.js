import {
  map, filter, invert, merge, all, some,
} from './objectUtils';

describe('Object Utils Test Cases', () => {
  it('map check', () => {
    expect(
      map({ a: 1, b: 2 }, ([key, val]) => [key.toUpperCase(), val * 10]),
    ).toEqual({ A: 10, B: 20 });
  });
  it('filter check', () => {
    expect(filter({ a: 12, b: 2 }, ([, val]) => val > 5)).toEqual({ a: 12 });
  });

  it('invert check', () => {
    expect(invert({ a: 12, b: 2 })).toEqual({ 12: 'a', 2: 'b' });
  });

  it('merge check', () => {
    expect(merge({ a: 12 }, { b: 2 }, { c: 3 })).toEqual({ c: 3, a: 12, b: 2 });
  });

  it('all check', () => {
    expect(all({ a: 12, b: 2 }, ([, val]) => val > 5)).toEqual(false);
    expect(all({ a: 12, b: 2 }, ([, val]) => val > 5)).toEqual(true);
  });

  it('some check', () => {
    expect(some({ a: 12, b: 2 }, ([, val]) => val > 5)).toEqual(true);
    expect(some({ a: 12, b: 2 }, ([, val]) => val > 25)).toEqual(false);
  });

  it('should throw', () => {
    expect(() => map({}, ([key, val]) => [key.toUpperCase(), val * 10])).toThrow();
    expect(() => filter({}, ([, val]) => val > 10)).toThrow();
    expect(() => invert({})).toThrow();
    expect(() => merge({})).toThrow();
    expect(() => all({}, ([, val]) => val > 10)).toThrow();
    expect(() => some({}, ([, val]) => val > 10)).toThrow();
  });
});
