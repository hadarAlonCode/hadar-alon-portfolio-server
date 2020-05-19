const sendMail = require('../functions/sendMail.js')

module.exports = (app) => {
    sendMails(app)
}


const sendMails = (app) => {
    app.post('/mail/post', async (req, res) => {

        let text = req.body.text
        let subject = req.body.subject
      
        // @ts-ignore
        let mail = await sendMail(text, subject, "hadaralon3@gmail.com")
      
        if(mail){
          res.send({ ok: true, result: 'Messege Received!' })
        }else{
          res.send({ ok: false, result: 'Messege Error' })
        }
      
    })
}
