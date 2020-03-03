const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcome = (email, name) => {
  sgMail.send({
    to: email,
    from: 'woongnguyen.15@gmail.com',
    subject: 'Thank for joining !',
    text: 'Welcome to the app, '+ name +'. hope you have good times experience with app.'
  })
}

const sendCancelation = (email, name) => {
  sgMail.send({
    to: email,
    from: 'woongnguyen.15@gmail.com',
    subject: 'Sorry to see you go!',
    text: 'Goodbye, '+ name +'. Hope our see you back sometime soon.',
  })
}

module.exports = {
  sendWelcome,
  sendCancelation
}