'use strict';

const fs = require('fs');

let items = ['short.txt', 'med.txt', 'long.txt'];
// let items = ['disclmr.txt', 'moon.txt', 'stevenson-jekyllandhyde.txt'];

function reader(text, cb) {
    let result= [];
    for(let i = 0; i < text.length; i++){
        fs.readFile(`../assets/${text[i]}`, (err, data) => {
            if(err) {
                cb(err);
                console.log(err);
                return;
            }
            let str = data.toString();
            result.push(str);
            console.log(str);

            if(result.length == text.length){
                cb(result)
            };
        });
    };
};

reader(items, (result) => {
    console.log(result);
});

module.exports = {};
module.exports.reader = reader;