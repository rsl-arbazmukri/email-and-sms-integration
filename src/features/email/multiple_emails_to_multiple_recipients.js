import { sgMail } from '../services/email-service'

const sendMultipleEmails = () => {
    const emails = [
        {
            to: 'recipient1@example.org',
            from: 'sender@example.org',
            subject: 'Hello recipient 1',
            text: 'Hello plain world!',
            html: '<p>Hello HTML world!</p>',
          },
          {
            to: 'recipient2@example.org',
            from: 'other-sender@example.org',
            subject: 'Hello recipient 2',
            text: 'Hello other plain world!',
            html: '<p>Hello other HTML world!</p>',
          },
    ];

    sgMail.send(sendMultipleEmails)
}

export { sendMultipleEmails }