const request = require('request');
const fetchBreedDescription = function(breedname, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
   
    let desc = JSON.parse(body);
    console.log(desc)
    if (desc[0]) {      
      callback(null, desc[0].description);
    } else {
      callback("Breed not found")
    }




  });
};

let search = process.argv.slice(2);
//fetch(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, description) => {

//});

module.exports = { fetchBreedDescription };
///// need ot handle undefined /////