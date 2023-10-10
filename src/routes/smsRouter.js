import app from 'express';

import { sendSms } from '../features/sms/index'

const smsRouter = app.Router();

// Exposing API to send simple sms, all the properties are hardcoded in the code itself.
smsRouter.post('/send-simple-sms', sendSms);

export { smsRouter }