'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;

    // Validate fields
    if (!name || !phone || !email || !message) {
        return { success: false, message: 'Please fill in all required fields.' };
    }

    // --- SMTP Configuration ---
    // IMPORTANT: Replace these with your actual SMTP credentials to send real emails.
    // For Gmail, you might need an App Password.
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Replace with your SMTP host (e.g., smtp.gmail.com)
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'your-email@gmail.com', // REPLACE THIS
            pass: 'your-app-password',    // REPLACE THIS
        },
    });

    try {
        // --- Send Email ---
        // Uncomment the following block to actually send the email once credentials are set.

        /*
        await transporter.sendMail({
          from: `"${name}" <${email}>`, // Sender address
          to: 'support@smilefotilo.com', // Receiver address
          subject: `New Project Inquiry: ${projectType}`,
          text: `
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Project Type: ${projectType}
            
            Message:
            ${message}
          `,
          html: `
            <h3>New Project Inquiry</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        });
        */

        // For now, we'll log it to the server console to simulate success.
        console.log('--- MOCK EMAIL SENT ---');
        console.log('To: support@smilefotilo.com');
        console.log(`From: ${name} <${email}>`);
        console.log(`Subject: New Project Inquiry: ${projectType}`);
        console.log(`Message: ${message}`);
        console.log('-----------------------');

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send message. Please try again.' };
    }
}
