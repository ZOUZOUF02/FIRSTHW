const express = require('express')
const app = express()
'use strict';
const excelToJson = require('convert-excel-to-json');
const result = excelToJson({
    sourceFile: 'Book1.xlsx'
});

app.listen(3000)