const { stringify } = require("querystring");
var userdata = [];
fetch("http://localhost:3500/user").then((x) =>
  x.json().then((data) => {
    
    for (let i = 0; i < data.length; i++) {
      userdata.push(data[i]);
    }
    console.log(userdata);  
  })
);


