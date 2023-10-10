import dotEnv from 'dotenv';

if (process.env.NODE_ENV !== 'PROD') {
  const envConfig = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({path: envConfig});
} else {
  dotEnv.config();
}

const Config = {
  PORT: 3002,
  BASE_URL: process.env.BASE_URL,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID,
  TWILIO_VIRTUAL_PHONE: process.env.TWILIO_VIRTUAL_PHONE
};

export default Config
