const parseEmail = require('./parseemail.js')


// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}



// Read the file and print its contents.
var fs = require('fs')
    , filename = process.argv[2];

//check if file exists and error if not.

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    // console.log(data)
    parseEmail(data).then(parseddata => {
        console.log(parseddata)
    })
})