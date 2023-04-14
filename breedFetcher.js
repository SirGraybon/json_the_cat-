const request = require('request');
const fetch = function(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return error;
    }
    if (body === "[]") {
      console.log("Breed not found");
    } else {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage. 
    }
  });
};

let search = process.argv.slice(2);
fetch(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, description) => {

});


///// need ot handle undefined /////