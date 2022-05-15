const express = require('express')
const app = express()
var API = []
 app.get('/', function (req, res) {
   res.send('Hello World')
 })
 parseXlsx('Book1.xlsx').then((excel) => {
  // excel is an array of arrays
  excel.forEach(data => {
    API.push({"name":data.name, "email":data.email,"image":data.image})
  });
});
app.listen(3000)