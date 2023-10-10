import { sgMail } from '../services/email-service'

const sendEmailAndHandleErrorIfAny = () => {
    const msg = {
        to: 'recipient@example.org',
        from: 'sender@example.org',
        subject: 'Hello world',
        text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',
    };

    sgMail.send(msg, (error, result) => {
        if (error) {
            // Handle error
        } else {
            // Success
        }
    })
}

export { sendEmailAndHandleErrorIfAny }