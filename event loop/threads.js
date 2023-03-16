const crypto = require('crypto');

const start = Date.now();

// function to check execution time
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2:', Date.now() - start);
});

// output (may wary but both will be close to one when only one hash function is exectued)
// 1: 942
// 2: 956

// as both of them run in parallel, the time taken by both of them will be close to one