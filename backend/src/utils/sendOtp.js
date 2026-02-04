const nodemailer = require("nodemailer");

module.exports = async (email, otp) => {
  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
    throw new Error(
      "Missing EMAIL or EMAIL_PASSWORD env vars for sending mail",
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP",
      text: `Your OTP is ${otp}`,
    });
  } catch (err) {
    console.error("Failed to send OTP email:", err);
    throw err;
  }
};
