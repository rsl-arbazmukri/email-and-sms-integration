import { sgMail } from '../services/email-service'

// The 'to' field can contain an array of recipients, which will send a single email
// with all of the recipients in the to field. The recipients will be able to see each other.
const sendSingleEmailToManyRecipients = () => {
    const msg = {
        to: ['recipient1@example.org', 'recipient2@example.org'],
        from: 'sender@example.org',
        subject: 'Hello world',
        text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',
    };

    sgMail.send(msg)
}

// If you want to send multiple individual emails to multiple recipient where they
// don't see each other's email addresses, use sendMultiple instead.
const sendSingleEmailToManyRecipientsAsDifferentEmail = () => {
    const msg = {
        to: ['recipient1@example.org', 'recipient2@example.org'],
        from: 'sender@example.org',
        subject: 'Hello world',
        text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',
    };

    sgMail.sendMultiple(msg)
}



export {
    sendSingleEmailToManyRecipients,
    sendSingleEmailToManyRecipientsAsDifferentEmail
}