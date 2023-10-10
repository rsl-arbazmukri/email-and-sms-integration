import express from 'express';
import HttpStatusCodes from '../utils/status-codes';

const healthCheckRouter = new express.Router();

healthCheckRouter.get('/', (req, res) => {
  res.status(HttpStatusCodes.STATUS_OK);
  res.json({status: 'Service is green and running....'});
});

export { healthCheckRouter }

