const fs = require('fs');

fs.readFile('./markdowns/kitchen.md', (err,data) => {
    if (err) throw err;
    console.log(data.toString());
})

// Exit on uncaught errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})