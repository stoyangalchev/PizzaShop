import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendContact = async (req, res) => {
  const { name, email, subject, message, recipientEmail } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Name, email, and message are required.");
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).send("Invalid email address.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: `${name} <${email}>`,
    to: recipientEmail || process.env.EMAIL_TO,
    subject: subject || "No Subject Provided",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h3>Pizza Shopp</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
