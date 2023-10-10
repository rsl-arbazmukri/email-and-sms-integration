import express from 'express'

import Config from './config/index';
import { healthCheckRouter } from './src/routes/health-check'
import { emailRouter } from './src/routes/emailRouter'
import { smsRouter } from './src/routes/smsRouter'

// Setup express app.
const app = express();

app.use(express.json());

// App routing setup.
app.use('/email', emailRouter);
app.use('/sms', smsRouter);
app.use('/v1/healthCheck', healthCheckRouter);

app.listen(Config.PORT, () => {
    console.log(`Service is running on ${Config.PORT}`);
});
