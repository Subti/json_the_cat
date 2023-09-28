const request = require("request");
const query = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.error(
      "Please enter a valid breed (the one you entered is invalid or not yet included)"
    );
    process.exit(1);
  }

  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log(data);
  console.log(typeof data);
  console.log(data[0].description);
});
