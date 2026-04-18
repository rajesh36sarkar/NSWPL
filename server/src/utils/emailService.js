import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465,   // true only for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Optional: Helps with some connection issues
  tls: {
    rejectUnauthorized: false
  }
});

// Verify email configuration (with better handling)
transporter.verify((error) => {
  if (error) {
    console.warn('⚠️ Email service could not be verified (Gmail connection issue)');
    console.warn('   Contact form will still work, but emails may fail until fixed.');
    console.warn('   Possible causes: Wrong App Password, 2FA not enabled, or network block.');
  } else {
    console.log('✅ Email service ready - Gmail SMTP connected');
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
    console.log('📧 Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email send failed:', error.message);
    throw new Error('Failed to send email. Please check email configuration.');
  }
};

export const sendContactNotification = async (contactData) => {
  const { firstName, lastName, email, message } = contactData;

  const subject = `📬 New Contact Form: ${firstName} ${lastName}`;
  
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
      ${message}
    </div>
    <hr>
    <p><small>Sent from Netai Stationery Works Pvt. Ltd. website</small></p>
  `;

  const text = `New Contact Form Submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}\n\nSent from Netai Stationery Works website`;

  return sendEmail({ subject, html, text });
};