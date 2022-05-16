const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
'use strict';
const excelToJson = require('convert-excel-to-json');
const result = excelToJson({
    sourceFile: 'Book1.xlsx',
    sheet: [
        {
            name:'sheet1',
            range:'A2:C7',
            columnToKey: {
        A: 'Name',
        B: 'Email',
        C: 'Images'
            }
        }
    ]
    });
    
// app.get('/', function(req, res) {
//     res.send('hello')
// })
app.get('/', function(req, res) {
    res.send(result)
})
app.listen(3000)