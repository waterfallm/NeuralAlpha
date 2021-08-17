var test = require('tape');
var fs = require('fs')

const parseEmail = require('../src/parseemail.js')


test('parse email 1', function (t) {


    var input = fs.readFileSync("samples/test-001.txt", 'utf8')
    // var expectedoutput = fs.readFileSync("samples/test-001-output.txt", 'utf8')
    // console.log(input)


    const actualoutput = parseEmail(input).then(parseddata => {
        const obj = JSON.parse(parseddata);
        // console.log("Parseddata:", obj)
        // console.log("Sender", obj.sender)
        // console.log("Value ", obj.values)
        // console.log("Mean", obj.mean)

        t.equal(obj.sender, 'waterfall_matthew@hotmail.com')
        // t.equal(obj.vaules, { '2021-05-10': 9.13, '2021-05-11': 12500, '2021-05-12': 140.25 })
        t.equal(obj.mean, 4216.46)
        t.end()
    })



})

test('parse email 2', function (t) {


    var input = fs.readFileSync("samples/test-002.txt", 'utf8')
    // console.log(input)


    const actualoutput = parseEmail(input).then(parseddata => {
        const obj = JSON.parse(parseddata);
        // console.log("Parseddata:", obj)
        // console.log("Sender", obj.sender)
        // console.log("Value ", obj.values)
        // console.log("Mean", obj.mean)

        t.equal(obj.sender, 'waterfall_matthew@hotmail.com')
        // t.equal(obj.vaules, { '2021-05-10': 9.13, '2021-05-11': 12500, '2021-05-12': 140.25 })
        t.equal(obj.mean, 4216.46)
        t.end()
    })

})

test('parse email 3', function (t) {


    var input = fs.readFileSync("samples/test-003.txt", 'utf8')
    // console.log(input)


    const actualoutput = parseEmail(input).then(parseddata => {
        // console.log(parseddata)
        const obj = JSON.parse(parseddata);
        // console.log("Parseddata:", obj)
        // console.log("Sender", obj.sender)
        // console.log("Value ", obj.values)
        // console.log("Mean", obj.mean)

        t.equal(obj.sender, 'waterfall_matthew@hotmail.com')
        // t.equal(obj.vaules, { '2021-05-10': 9.13, '2021-05-11': 12500, '2021-05-12': 140.25 })
        t.equal(obj.mean, 4216.46)
        t.end()
    })

})

// test('parse email 4', function (t) {


//     var input = fs.readFileSync("samples/test-004.txt", 'utf8')
//     console.log(input)


//     const actualoutput = parseEmail(input).then(parseddata => {
//         console.log(parseddata)
//         const obj = JSON.parse(parseddata);
//         console.log("Parseddata:", obj)
//         // console.log("Sender", obj.sender)
//         // console.log("Value ", obj.values)
//         // console.log("Mean", obj.mean)

//         t.equal(obj.sender, 'waterfall_matthew@hotmail.com')
//         // t.equal(obj.vaules, { '2021-05-10': 9.13, '2021-05-11': 12500, '2021-05-12': 140.25 })
//         t.equal(obj.mean, 4216.46)
//         t.end()
//     })

// })

test('parse email 5', function (t) {


    var input = fs.readFileSync("samples/test-005.txt", 'utf8')
    // console.log(input)


    const actualoutput = parseEmail(input).then(parseddata => {
        // console.log(parseddata)
        const obj = JSON.parse(parseddata);
        // console.log("Parseddata:", obj)
        // console.log("Sender", obj.sender)
        // console.log("Value ", obj.values)
        // console.log("Mean", obj.mean)

        t.equal(obj.sender, 'waterfall_matthew@hotmail.com')
        // t.equal(obj.vaules, { '2021-05-10': 9.13, '2021-05-11': 12500, '2021-05-12': 140.25 })
        t.equal(obj.mean, 4216.46)
        t.end()
    })

})