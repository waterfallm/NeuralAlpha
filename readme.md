# NPM package Selection

## Transports
https://www.npmjs.com/package/mail-listener - 142 wk dl
https://www.npmjs.com/package/mail-listener2 - 4000 wk dl

## Parsing
https://github.com/willdurand/EmailReplyParser
https://www.npmjs.com/package/mailparser - 250k per wk


# Script Usage

```
npm install
``` 


```
const parseEmail = require('./parseemail.js')
// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and send to parseEmail
var fs = require('fs')
    , filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    // console.log(data)
    parseEmail(data).then(parseddata => {
        console.log(parseddata)
    })
})
```

```
node src/test.js samples/test-001.txt
node src/test.js samples/test-002.txt
node src/test.js samples/test-003.txt
node src/test.js samples/test-004.txt
node src/test.js samples/test-005.txt
```

# To Do

1. Extend Test Cases more conplex and not repeating same 3 line
2. Configure Tape for automated testing
3. Refactor for loop in parseemail.js

