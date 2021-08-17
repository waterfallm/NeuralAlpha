const fs = require('fs');

var MailListener = require("mail-listener2");
const simpleParser = require('mailparser').simpleParser;

var emailDate = new Date().toUTCString()

var mailListener = new MailListener({
    username: "waterfallmatthew88",
    password: "d218922u",
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true,
    connTimeout: 10000, // Default by node-imap
    authTimeout: 5000, // Default by node-imap,
    debug: console.log, // Or your custom function with only one incoming argument. Default: null
    tlsOptions: { rejectUnauthorized: false },
    mailbox: "INBOX", // mailbox to monitor
    // searchFilter: ["NEW", "UNSEEN"], // the search filter being used after an IDLE notification has been retrieved
    markSeen: true, // all fetched email willbe marked as seen and not fetched next time
    fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
    // mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib.
    // attachments: true, // download attachments as they are encountered to the project directory
    // attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});

mailListener.start(); // start listening

// stop listening
//mailListener.stop();

mailListener.on("server:connected", function () {
    console.log("imapConnected");
});

mailListener.on("server:disconnected", function () {
    console.log("imapDisconnected");
});

mailListener.on("error", function (err) {
    console.log(err);
});

mailListener.on("mail", function (mail, seqno, attributes) {
    // do something with mail object including attachments
    // console.log("emailParsed", mail);



    simpleParser(mail.eml, {})
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



mailListener.on("attachment", function (attachment) {
    console.log(attachment.path);
});