import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
}

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #0d1224;">New Message From Portfolio Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #16f2b3; padding-left: 10px; margin-left: 0; background-color: #f9f9f9; padding: 12px;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Reply directly to this email to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `Portfolio Message from ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload || {};

    // Validate payload
    if (!name?.trim() || !email?.trim() || !userMessage?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and message are all required.',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid email address.',
        },
        { status: 400 }
      );
    }

    const emailConfigured = Boolean(process.env.EMAIL_ADDRESS && process.env.GMAIL_PASSKEY);
    const telegramConfigured = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);

    // If neither channel is configured, gracefully report server configuration requirement
    if (!emailConfigured && !telegramConfigured) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Message delivery is not currently configured on the server. Please contact directly via email at prajapatianish437@gmail.com or phone at +91-9171357320.',
        },
        { status: 503 }
      );
    }

    const formattedMessage = `New contact message from portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}\n`;

    let emailSuccess = false;
    let telegramSuccess = false;

    if (emailConfigured) {
      emailSuccess = await sendEmail(payload, formattedMessage);
    }

    if (telegramConfigured) {
      telegramSuccess = await sendTelegramMessage(
        process.env.TELEGRAM_BOT_TOKEN,
        process.env.TELEGRAM_CHAT_ID,
        formattedMessage
      );
    }

    // Success if at least one configured channel succeeded
    if (emailSuccess || telegramSuccess) {
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to deliver message via configured providers. Please email prajapatianish437@gmail.com directly.',
      },
      { status: 500 }
    );
  } catch (error) {
    console.error('Contact API Error:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'A server error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}
