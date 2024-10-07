/*
Notes from courses are taken in markdown files.

It would be nice to automate the conversion of notes from markdown to presentable web apps.

This allows for fusion with other technologies such as Mermaid for diagrams and charts and Mathjax for showing mathematical formulas.

Node will be used as it is the closest programming language for web dev ❔
Special characters (emojis) may require special care.

# Markdown
- Each header or subheader denoted with # or ##. No ### are used.
- Each line item starts with a -

*/


const fs = require('fs');
const path = require('path');

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