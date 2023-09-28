const { assert } = require("chai");
const { fetchBreedDescription } = require("../breedFetcher");

describe(`fetchBreedDescription`, () => {
  it(`returns a string description for a valid breed via callback`, (done) => {
    fetchBreedDescription(`Siberian`, (err, desc) => {
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it(`returns an error if there is an invalid breed sent via callback`, (done) => {
    fetchBreedDescription(`afsdioj`, (err, desc) => {
      assert.equal(err, "Please enter a valid breed");
      assert.equal(null, desc);
      done();
    });
  });
});
