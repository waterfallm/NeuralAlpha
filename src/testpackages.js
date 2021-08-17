// email-reply-parser test
//*********************** */

// var EmailReplyParser = require("email-reply-parser");

// // Make sure we got a filename on the command line.
// if (process.argv.length < 3) {
//     console.log('Usage: node ' + process.argv[1] + ' FILENAME');
//     process.exit(1);
// }
// // Read the file and print its contents.
// var fs = require('fs')
//     , filename = process.argv[2];
// fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log('OK: ' + filename);
//     // console.log(data)


//     var email = new EmailReplyParser().read(data);
//     console.log(email.getVisibleText());
//     // console.log(email.getFragments());
//     // console.log(email.getContent());

// });


// simple mail parser 
//*********************** */

// const simpleParser = require('mailparser').simpleParser;

// // Make sure we got a filename on the command line.
// if (process.argv.length < 3) {
//     console.log('Usage: node ' + process.argv[1] + ' FILENAME');
//     process.exit(1);
// }
// // Read the file and print its contents.
// var fs = require('fs')
//     , filename = process.argv[2];
// fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log('OK: ' + filename);
//     // console.log(data)


//     simpleParser(data, {})
//         .then(parsed => {

//             // console.log(parsed)
//             console.log("Subject:", parsed.subject)
//             console.log("From:", parsed.from)
//             console.log("Text/Body:", parsed.text)
//         })

//         .catch(err => {
//             console.log(err)

//         });

// });

// mail-listener2
//*********************** */

const fs = require('fs');

const simpleParser = require('mailparser').simpleParser;


// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
    , filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    // console.log(data)


    simpleParser(data, {})
        .then(parsed => {

            // console.log(parsed)
            console.log("Subject:", parsed.subject)
            // console.log("From:", parsed.from)
            // console.log("Text/Body:", parsed.text)

            fs.writeFileSync(parsed.subject + ".txt", mail.eml);
        })

        .catch(err => {
            console.log(err)

        });

});











