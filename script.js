/*

Markdown special characters: hashtag and dash.

Copy markdown file to a string

Step through string:
if char = # : encase chars before newline as <h1> element.
if char = - : encase chars before newline as <li> element.



*/


const fs = require('fs');
const path = require('path');

// ?
fs.readFile('./markdowns/kitchen.md', (err,data) => {
    if (err) throw err;
    console.log(data.toString());
})

// Read a file.
let data = fs.readFileSync('./markdowns/kitchen.md', 'utf-8');

// Iterate through each character.
for (const ch of data){

    if(ch == "-"){
        console.log("***DASH***")
    }

  console.log(ch);
}

// Exit on uncaught errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})