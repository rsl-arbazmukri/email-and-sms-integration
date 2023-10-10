# Setup Email and SMS Communication With NodeJS

If you want to choose email / sms service for your project, you can visit [detailed document of email / sms](https://docs.google.com/document/d/1ZnpLGSBpiMFe3USiAA4Cd4t8Dhxyck636nxRXWc-1UA/edit) services, where all the details are available.

## Email

### Prerequisites
To integrate Sendgrid, you will need **SENDGRID_API_KEY**, **“from” email** address and **template information** if you want to send a transactional email. Below are more details on how you can get these details:

*Note: For client projects you should get all these details from the client.*

1. Sendgrid Account
Sign up for a [SendGrid](https://app.sendgrid.com/login/) account. (Free trial is available, you can easily create your own account for testing purpose)
Enable Two-factor authentication for the account
2. Get API key
[Create and store a SendGrid API Key](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs#create-and-store-a-sendgrid-api-key) with Mail Send > Full Access permissions.
3. Domain Authentication (Setup “from” email address)
Complete [Domain Authentication](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication). This is the sender identity for the sendgrid reputation. A Sender Identity represents your 'From' email address.
4. Emails with Dynamic Template
If you want to send an email with a template then you will need to set up a dynamic template and use templateId while sending the emails. To create template follow below steps:
    - Open the [Dynamic Templates](https://sendgrid.com/dynamic_templates) page and click Create Template.
    - Add a unique template name and then click Save.
    - To begin editing your new template, click Add Version.
    - Select an editor and click Continue.
    - Design your template. For more information on using Handlebars, see Using Handlebars.
    - Set the template to Active to enable sending.

Please refer [official document](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs#prerequisites) for the details.

## Create and store a SendGrid API key

Create API key as per instruction [API Key documentation](https://docs.sendgrid.com/ui/account-and-settings/api-keys) and store in environment variable like mentioned below:

```shell
SENDGRID_API_KEY=<Your API Key>
```

### Install npm package for Sendgrid

```shell
npm install --save @sendgrid/mail
```

### Complete Code block

```javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })

```

This is simple code block, please refer source code from `src/features/email` for the general structure and multiple variations.

### Sample code covers below use cases

- Send a Single Email to a Single Recipient
- Send a Single Email to Multiple Recipients
- Send Multiple Emails to Multiple Recipients
- Send Multiple Emails with Personalizations
- Handling Success/Failure/Errors
- Transactional Templates
- Attachments
- Scheduled Send

##### Message format Cheat Sheet

Here are the all possible parameters used to create the email configuration.

```javascript
{
  to: 'recipient@example.org', 
  cc: 'someone@example.org',
  bcc: 'me@example.org',
  from: 'sender@example.org',
  replyTo: 'othersender@example.org',
  subject: 'Hello world',
  text: 'Hello plain world!',
  html: '<p>Hello HTML world!</p>',
  templateId: '<TEMPLATE_ID>', // For client project this should be get from client. For testing you can create from sendgrid official portal refer https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates
  substitutionWrappers: ['{{', '}}'],
  dynamicTemplateData: {
    name: 'Some One',
    id: '123',
  },
  attachments: [
    {
      content: 'Some attachment content',
      filename: 'some-attachment.txt',
    },
  ],
  categories: ['Transactional', 'My category'],
  sendAt: "<Time in seconds>", // This is for scheduling purpose.
  headers: {
    'X-CustomHeader': 'Custom header value',
  },
  sections: {},
  customArgs: {
    myCustomArg: 'some string', // must be a string
  },
  batchId: 'sendgrid-batch-id',
  asm: {
    groupId: 1
  },
  ipPoolName: 'sendgrid-ip-pool-name',
  mailSettings: {
    sandboxMode: {
      enable: true,
    },
  },
  trackingSettings: {},
}
``````

###### Possible address format which can be used in `to`, `from`, `cc`, `bcc`, `replyTo`

```javascript
  // Simple email address string
  to: 'someone@example.org',

  // Email address with name
  to: 'Some One <someone@example.org>',

  // Object with name / email
  to: {
    name: 'Some One',
    email: 'someone@example.org',
  },

  // Arrays are supported for to, cc and bcc
  to: [
    'someone@example.org',
    'Some One <someone@example.org>',
    {
      name: 'Some One',
      email: 'someone@example.org',
    },
  ]
```

Refer [Official documentation](https://github.com/sendgrid/sendgrid-nodejs/tree/main/docs/use-cases) for the more details on the use cases.

## SMS

#### Quick Start
To integrate Twilio sms, you will need **ACCOUNT_SID**, **AUTH_TOKEN** and **“from” phone** number. Below are more details on how you can get these details:

*Note: For client projects you should get all these details from the client.*

#### Prerequisites
1. A Twilio account (if you don't have one, sign up [here](https://www.twilio.com/try-twilio))
2. Get ACCOUNT_SID from Twilio dashboard. Info will be available in the AccountInfo section.
3. Create AUTH_TOKEN from Twilio dashboard, this will be needed to configure the Twilio service. Info will be available in the AccountInfo section.
4. Verify your account with a phone number. This is a necessary step to send sms from your account.
5. Get a Twilio phone number, this will be a virtual phone number.

#### Setup

Use npm or yarn to install twilio package

```shell
npm install twilio --save

or

yarn add twilio
```

#### Sending SMS

To send the sms from the application, you will need to configure the “twilio” client with Auth_Token and Account_SID (See more details in prerequisites). Make sure you store these credentials in the env file.

```javascript
// Initialize Twilio client with your Account SID and Auth Token
const accountSid = process.env.YOUR_ACCOUNT_SID;
const authToken = process.env.YOUR_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Send an SMS
client.messages
  .create({
    body: 'Hello from Twilio!',
    from: '+1234567890',  // Your Twilio phone number
    to: '+0987654321'    // Recipient's phone number
  })
  .then(message => console.log('Message sent:', message.sid))
  .catch(error => console.error('Error:', error));
```

This code/software is NOT licensed and is not open for use/change/distribution. Please open an issue / pull-request if you require the same.
