const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(Date.now() - start);
        }
        );
    }).end();
}

function doHash(){
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash', Date.now() - start);
});
}

// its managed by OS and not by node so it doesnt interfear in others worktime.
doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
});

// fs only executes after a thread is empty and ther is no pending functional call so calculate it by sub 4 from total calls then the remaining number is the number of function executed first.
doHash();
doHash();
doHash();
doHash();


