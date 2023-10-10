import sgMail from '@sendgrid/mail'

import Config from '../../../config/index'

sgMail.setApiKey(Config.SENDGRID_API_KEY);

export { sgMail }
