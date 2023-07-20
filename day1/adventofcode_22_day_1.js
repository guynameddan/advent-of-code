const fs = require('fs');

fs.readFile('adventofcode.com_2022_day_1_input.txt', (err, inputD) => {
    if (err) throw err;
        console.log(inputD.toString());
})