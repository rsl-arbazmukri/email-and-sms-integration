import { sgMail } from '../services/email-service'

const sendTransactionalEmail = () => {
    const msg = {
        to: 'recipient@example.org',
        from: 'sender@example.org',
        templateId: '<Template_ID>',
        dynamicTemplateData: {
          // These fields should be defined in template you created on SendGrid.
          subject: 'Testing Templates',
          name: 'Some One',
        },
    }

    sgMail.send(msg)
}

export { sendTransactionalEmail }