import { sgMail } from '../services/email-service'
import fs from 'fs';

// To attach any file with the email, you will have convert that file in
// base64 and then add it in the 'attachements' section in email
// message with other details (like fileName, contentType).
const sendEmailWithAttachment = async () => {
    const data = await fs.readFile('../../../public/sampleFile.txt');
  
    const msg = buildPayload(data)

    sgMail.send(msg)
}

const buildPayload = (data) => {
    const msg = {
        to: 'recipient@test.org',
        from: 'sender@test.org',
        subject: 'Attachment',
        html: '<p>Here’s an attachment for you!</p>',
        attachments: [
          {
            content: data.toString('base64'),
            filename: 'sample-attachment.pdf',
            type: 'application/text',
            disposition: 'attachment',
            content_id: 'mytext',
          },
        ],
      };
}

export { sendEmailWithAttachment }