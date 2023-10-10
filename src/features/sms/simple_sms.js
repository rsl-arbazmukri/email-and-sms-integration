import { client } from '../services/sms-service'
import HttpStatusCodes from '../../utils/status-codes';
import Config from '../../../config/index'

const sendSms = (req, res) => {
    // Send an SMS
    client.messages
        .create({
            body: 'Hello from Twilio!',
            from: Config.TWILIO_VIRTUAL_PHONE,  // Your Twilio phone number
            to: '+919561138687'    // Recipient's phone number
        })
        .then(message => console.log('Message sent:', message.sid))
        .catch(error => console.error('Error:', error));


    res.status(HttpStatusCodes.STATUS_OK)
    res.json({result: "Email sent successfully"})
}

export { sendSms }