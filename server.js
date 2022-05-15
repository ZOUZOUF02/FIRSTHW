const express = require('express')
const app = express()
var API = []
 app.get('/', function (req, res) {
   res.send('Hello World')
 })
 parseXlsx('Book1.xlsx').then((data) => {
  // data is an array of arrays
  data.forEach(element => {
    API.push({"name":element.name, "email":element.email,"img":element.image})
  });
});
app.listen(3000)