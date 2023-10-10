import { sgMail } from '../services/email-service'
import HttpStatusCodes from '../../utils/status-codes';

const sendEmail = (req, res) => {
    const msg = {
        to: 'testing@example.com',
        from: 'test@example.com',
        subject: 'Hello world',
        text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',
    };

    sgMail.send(msg)

    res.status(HttpStatusCodes.STATUS_OK)
    res.json({result: "Email sent successfully"})
}

export { sendEmail }