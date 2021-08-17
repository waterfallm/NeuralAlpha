
//const for some basic input input validation
const lowerbound = 0
const upperbound = 20000
const emailwhitelist = ['waterfall_matthew@hotmail.com', 'matthew@waterfall-family.co.uk']

//use mailparser to extract address/subject and body from email.
const simpleParser = require('mailparser').simpleParser;


//function to format the date yyy-mm-dd
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}


async function parseEmail(data) {

    let parsedOutput = ""
    let itemcount = 0
    let itemtotal = 0


    const parsed = await simpleParser(data, {})


    // console.log(parsed)
    // console.log("Subject:", parsed.subject)
    // console.log("From:", parsed.from)
    // console.log("Text/Body:", parsed.text)
    // console.log(parsed.text.split('\n').length)

    if (emailwhitelist.includes(parsed.from.value[0].address)) {
        //valid sender

        parsedOutput = `{\n\t"sender" : "${parsed.from.value[0].address}" ,\n`
        parsedOutput = parsedOutput + `\t"values": {\n`

        let array = parsed.text.split('\n')

        for (let index = 0; index < array.length; ++index) {
            // console.log("line:" + index, array[index], Date.parse(array[index]));

            let linearray = array[index].split(':')
            if (linearray.length === 2) { // potential date & value combo
                // console.log("Date:", linearray[0], Date.parse(linearray[0]))
                // console.log("Value:", linearray[1])

                if (Date.parse(linearray[0])) {
                    // console.log("valid Date")
                    if (Number(linearray[1]) >= lowerbound && Number(linearray[1]) <= upperbound) {

                        // parsedOutput = parsedOutput + `\t\t"${linearray[0]}"  :  ${linearray[1]}`
                        parsedOutput = `${parsedOutput}\t\t"${formatDate(linearray[0])}"  :  ${linearray[1]}`

                        if (index < (linearray.length)) {
                            parsedOutput = parsedOutput + `,\n`
                        } else {
                            parsedOutput = parsedOutput + `\n`
                        }

                        itemcount = itemcount + 1
                        itemtotal = itemtotal + Number(linearray[1])

                    } else {
                        // console.log("Line:" + index + " Reject Value")
                    }


                } else {
                    // console.log("Line:" + index + " Invalid Date")
                }


            } else {
                //Reject line ":"
                // console.log("Line:" + index + " Reject not enough data")
            }
        }
        parsedOutput = parsedOutput + `\t},\n`
        parsedOutput = parsedOutput + `\t"mean" : ${(itemtotal / itemcount)} \n}`
        // console.log(parsedOutput)
        return (parsedOutput)

        // console.log(itemcount, itemtotal, (itemtotal / itemcount))

    } else {
        // reject invalid sender
        // console.log("Invalid Sender")


        throw new Error("Invalid Sender")
    }





}

module.exports = parseEmail









