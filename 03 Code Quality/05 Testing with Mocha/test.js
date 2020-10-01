mocha.setup("bdd");
let assert = chai.assert;

describe("pow", function () {
  /*
  describe("raises x to power of 3", function () {
    before(() => alert("BEFORE tests start"));
    after(() => alert("AFTER tests start"));

    beforeEach(() => alert("BEFORE EVERY test starts"));
    afterEach(() => alert("AFTER EVERY test starts"));

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power of 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  */
  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });
  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});

mocha.run();
