import nodemailer from "nodemailer";
import sgTranport from "nodemailer-sendgrid-transport";

const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };

  const client = nodemailer.createTransport(sgTranport(options));

  return client.sendMail(email);
};

const sendEmail = (to: string, subject: string, html: string) => {
  const email = {
    from: "LJK@muber.com",
    to,
    subject,
    html
  };
  return sendMail(email);
};

export const sendVerificationEmail = (to: string, fullName: string, key: string) => {
  const emailSubject = `Hello ${fullName}, please verify your Email`;
  const emailBody = `Verify your email by clicking <a href="http://muber.com/verification/${key}/">hear</a>`;
  return sendEmail(to, emailSubject, emailBody);
};
