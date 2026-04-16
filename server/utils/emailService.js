import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email service error:', error);
  } else {
    console.log('✅ Email service ready');
  }
});

export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: to || process.env.EMAIL_TO,
      subject,
      html,
      text,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email send error:', error);
    throw new Error('Failed to send email');
  }
};

export const sendContactNotification = async (contactData) => {
  const { firstName, lastName, email, message } = contactData;
  const subject = `📬 New Contact: ${firstName} ${lastName}`;
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
    <hr>
    <p><small>Sent from Netai Stationery Works website.</small></p>
  `;
  const text = `New Contact:\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;
  return sendEmail({ subject, html, text });
};