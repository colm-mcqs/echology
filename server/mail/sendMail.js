/**
 * Created by Colm on 15/08/15.
 */
module.exports=function(req,res){
    console.log(req.body)
    var nodemailer = require('nodemailer')
        , wellknown = require('nodemailer-wellknown');
    var transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: 'echologyechology@yahoo.co.uk',
            pass: 'q1w1e1r1'
        }


    });

    var from = req.body.name+' <'+req.body.email+'>';
    console.log(from)
    var mailOptions = {
        from: from, // sender address
        to: 'colmose@gmail.com', // list of receivers
        subject: 'Hello ?', // Subject line
        text: 'Hello world ?', // plaintext body
        html: '<b>Hello world ?</b><br>'+req.body.body // html body
    };



// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return res.json({mail:false});
        } else {
            console.log('Message sent: ' + info.response);
            res.json({mail:true}) ;
        }


    });

}