// Example object
let obj = {
    key1: "val1",
    key2: "val2",
    key3: "val3"
}

for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

Object.keys(obj).forEach(key => {
  let value = obj[key];
  console.log(key, value);
});

for (let key in obj) {
  let value = obj[key];
  console.log(key, value);
}


let resume = {
    name: "Rishi Rajan",
    dob: "32/13/1900",
    degree: "B.tech ChemE",
    cgpa: 8.69,
    experience: 1,
    phn: "8888888888",
    blog:"therishirajan.blogspot.com",
    currentdesignation: "PAT"
}