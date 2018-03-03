const fs = require('fs');

// let books = ['stevenson-jekyllandhyde.txt', 'disclmr.txt', 'moon.txt'];
let books = ['short.txt', 'med.txt', 'long.txt'];

function reader(text, cb) {
    let list = [];
    for (let i = 0; i < text.length; i++) {
        fs.readFile(`../assets/${books[i]}`, (err, data) => {
        })
    };

    function handler(text, err, i) {}
        if (err) {
            cb(err);
            return;
        }
        let str = data.toString();
        console.log(str);
        list[i] = str;

        if (list.length == text.length) {
            cb(null, list);
        };
}

reader(books, (list) => {});

// module.exports = {};
// module.exports.reader = reader;


/////////////from lab/////////////////////////
function read (paths, cb) {

}

function handleDone (err, data, i) {
    if (err) {
        cb(err);
        return;
    }
    console.log("FILE", i, "finished");

    result[i] = data.toString('utf-8');
    numFinished;
    if (numFinished === paths.length) {
        cb(null, results);
    }
}

fs.readFile()