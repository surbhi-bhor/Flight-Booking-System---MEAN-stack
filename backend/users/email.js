var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "surbhidilipbhor@gmail.com",
        pass: 'Dilip@1975'
    }
});

module.exports.sendEmail = (mailData)=> {
    transporter.sendMail(mailData, (err,info)=> {
        if(err){
            console.log(err);
        } else {
            console.log('Email sent: ' +info.response);
        }
    })
}