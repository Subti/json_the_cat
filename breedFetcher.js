const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return callback(error, null);
      }
      if (response.statusCode !== 200) {
        return callback(
          `Request failed with status code ${response.statusCode}. Check URL`,
          null
        );
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback(`Please enter a valid breed`, null);
      }
      return callback(null, data[0].description);
    }
  );
};

module.exports = {
  fetchBreedDescription,
};
