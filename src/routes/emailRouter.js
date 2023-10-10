import app from 'express';

import { sendEmail } from '../features/email/index'

const emailRouter = app.Router();

// Exposing API to send simple email, all the properties are hardcoded in the code itself.
emailRouter.post('/send-simple-email', sendEmail);

export { emailRouter }