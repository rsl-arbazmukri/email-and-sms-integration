import twilio from 'twilio';

import Config from '../../../config/index'

const client = twilio(Config.TWILIO_ACCOUNT_ID, Config.TWILIO_AUTH_TOKEN);

export { client }