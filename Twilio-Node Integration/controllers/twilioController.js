// controllers/twilioController.js

const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendSms = (req, res) => { // Ensure the function name is sendSms
    const { to, body } = req.body;

    if (!to || !body) {
        return res.status(400).json({ error: 'Recipient number and message body are required.' });
    }

    client.messages.create({
        body: body,
        to: to, // Recipient's phone number
        from: process.env.TWILIO_PHONE_NUMBER // Your Twilio phone number
    })
    .then(message => {
        res.status(200).json({
            success: true,
            message: `Message sent successfully to ${to}`,
            messageSid: message.sid
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: 'Failed to send the message',
            error: error.message
        });
    });
};
