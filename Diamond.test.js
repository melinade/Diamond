const { diamond } = require("./diamond.js");
describe("Hier der Outcome:", () => {
  it("sollte LEER ausgeben bei ''", () => {
    expect(diamond("")).toEqual([]);
  });
  it("sollte A ausgeben bei 'A'", () => {
    expect(diamond("A")).toEqual(["A"]);
  });
  it("sollte B-Diamant ausgeben bei 'B'", () => {
    expect(diamond("B")).toEqual(["-A-", "B--B", "-A-"]);
  });

  it("sollte C-Diamant ausgeben bei 'C'", () => {
    expect(diamond("C")).toEqual(["--A--", "-B-B-", "C---C", "-B-B-", "--A--"]);
  });

});