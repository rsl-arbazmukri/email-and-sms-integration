import { sgMail } from '../services/email-service'

// Limitations:
// 1. Emails can only be scheduled, at most, 72 hours in advance.
// 2. If successful, without a batchId set, the call to sgMail.send() returns
//    a 202 status code with an empty response body. Currently, cancelling a scheduled
//    email without a batchId set requires a change of password or contacting our support team.
const scheduleEmail = () => {
    const msg = {
        to: 'recipient@example.org',
        from: 'sender@example.org',
        subject: 'Hello delayed email',
        html: '<p>Some email content</p>',
        sendAt: 1500077141, // Specify when to send the emails (in UNIX timestamp seconds, not milliseconds)      
    }

    sgMail.send(msg)
}

// If you want to have a functinality to cancel / pause the scheulde, then you have send the message with batchId.
// If the message is sent with batchId, you will able to cancel / pause the schedule from https://github.com/sendgrid/sendgrid-nodejs/blob/main/packages/client/USAGE.md#post-userscheduled_sends 
const scheduleEmailWithBatchId = () => {
    const msg = {
        to: 'recipient@example.org',
        from: 'sender@example.org',
        subject: 'Hello delayed email',
        html: '<p>Some email content</p>',
        sendAt: 1500077141,
        batchId: 'YOUR_BATCH_ID'
      };

      sgMail.send(msg)
}

export { scheduleEmail, scheduleEmailWithBatchId }