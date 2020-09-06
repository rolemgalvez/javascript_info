mocha.setup("bdd");
let assert = chai.assert;

describe("pow", function () {
  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
  });
});

mocha.run();
