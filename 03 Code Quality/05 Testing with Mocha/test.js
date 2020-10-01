mocha.setup("bdd");
let assert = chai.assert;

describe("pow", function () {
  describe("raises x to power of 3", function () {
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
});

mocha.run();
