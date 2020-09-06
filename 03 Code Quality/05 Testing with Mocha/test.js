mocha.setup("bdd");
let assert = chai.assert;

describe("pow", function () {
  it("2 raised to 3rd power is 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to 4th power is 81", function () {
    assert.equal(pow(3, 4), 81);
  });
});

mocha.run();
