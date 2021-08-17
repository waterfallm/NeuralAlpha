# NPM package Selection



Package Name|Package Link|Package Popularity
------------|------------|------------------
mail-listener | https://www.npmjs.com/package/mail-listener | 142 wk dl
mail-listener 2 | https://www.npmjs.com/package/mail-listener2 |  4000 wk dl
mailparser | https://www.npmjs.com/package/mailparser | 250k per wk




# Script Usage



```
npm install
``` 

## src/fetchemail.js 

create .env file with params for your Email provider
```
   emailusername=xxx
   emailpassword=xxx
   emailhost=xxx
   emailport=xxx
```
Run File with
```
node src/fetchemail.js
```

Then send an email to same email address and email will be saved out to local file system on receipt, this gives you a real world example of am decoded email.

## src/parseemail.js 

Edit parseemail.js to edit constants 
* lowerbound: lower limit number to reject a email data value, note rest of email still parsed.
* upperbound: upper limit number to reject a email data value, note rest of email still parsed.
* emailwhitelist: Only emails in this array will be parsed.

```
//const for some basic input input validation
const lowerbound = 0
const upperbound = 20000
const emailwhitelist = ['waterfall_matthew@hotmail.com', 'matthew@waterfall-family.co.uk']
```

To parse the received email create file called test.js with the following code

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
2. Configure Tape for automated testing - WIP `npm run unit:test` currently failing on test 4 
3. Refactor(break & continue) for loop in parseemail.js
4. add email whitelisting to fetchemail script also.

