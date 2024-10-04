const express = require('express')
const fs = require('fs')
const chalk = require('chalk')
const server = express()
const port = 3000

let array = []

let total = 0
while(total < 20000){
    let val = Math.floor(Math.random() * (100 - 5) + 5)
    array.push(val)
    total = total+val
}

const jsonContent = JSON.stringify(array);

fs.writeFile("./values.json", jsonContent, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("Arquivo salvo");
}); 
console.log(total)