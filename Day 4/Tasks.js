// 2. Display all country flags in https://restcountries.eu/rest/v2/all

//Using the example  url from class as the provided url gives timeout error

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const url  =" https://restcountries.eu/rest/v2/all";-- link did not work
const url ="https://631ec76222cefb1edc3a4247.mockapi.io/suman";
let xhr = new XMLHttpRequest();

xhr.responseType = "json";
xhr.open("GET", url);
var resultobj = {};

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    resultobj =JSON.parse( xhr.responseText);
    
  }
  //Printing Location instead of flags

  for(let i =0 ; i<resultobj.length;i++){
    console.log(resultobj[i].location);
  }

  console.log("-----------------------------------------------------------------------------------")

  // Getting properties of objects
  for(let i =0 ; i<resultobj.length;i++){
    console.log(resultobj[i].id);
    console.log(resultobj[i].image_url);
    console.log(resultobj[i].name);
  }

}

xhr.send();






