import { map, filter, invert, merge, all, some } from "./objectUtils";

describe("Object Utils Test Cases", () => {
  it("map check", () => {
    expect(
      map({ a: 1, b: 2 }, ([key, val]) => [key.toUpperCase(), val * 10])
    ).toEqual({ A: 10, B: 20 });
    expect(() =>
      map({}, ([key, val]) => [key.toUpperCase(), val * 10])
    ).toThrow();
  });
  it("filter check", () => {
    expect(filter({ a: 12, b: 2 }, ([key, val]) => val > 5)).toEqual({ a: 12 });
    expect(() => filter({}, ([key, val]) => val > 10)).toThrow();
  });

  it("invert check", () => {
    expect(invert({ a: 12, b: 2 })).toEqual({ 12: "a", 2: "b" });
    expect(() => invert({})).toThrow();
  });

  it("merge check", () => {
    expect(merge({ a: 12 }, { b: 2 }, { c: 3 })).toEqual({ c: 3, a: 12, b: 2 });
    expect(() => merge({})).toThrow();
  });

  it("all check", () => {
    expect(all({ a: 12, b: 2 }, ([key, val]) => val > 5)).toEqual(false);
    expect(all({ a: 12, b: 2 }, ([key, val]) => val > 5)).toEqual(true);
    expect(() => all({}, ([key, val]) => val > 10)).toThrow();
  });

  it("some check", () => {
    expect(some({ a: 12, b: 2 }, ([key, val]) => val > 5)).toEqual(true);
    expect(some({ a: 12, b: 2 }, ([key, val]) => val > 25)).toEqual(false);
    expect(() => some({}, ([key, val]) => val > 10)).toThrow();
  });
});
