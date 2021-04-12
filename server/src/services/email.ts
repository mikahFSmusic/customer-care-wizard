import nodemailer from 'nodemailer';
import { IDamagedDefect } from '../types/damaged_defect';

// function for sending emails on submission of damaged/defective form

// TODO: finish generalized emailing function that returns correct email function by type
const getHTML = (type: string) => {
  switch (type) {
    case "damaged_defect":

  }
}

// TODO: create html template for DD form
export const ddEmail = async(recipients?: Array<string>, formData?: IDamagedDefect) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    },
  });

  let info = await transporter.sendMail({
    from: "mikah.feldmanstein@gmail.com",
    to: recipients || "mikah.feldmanstein@gmail.com",
    subject: "Test",
    text: "plain text body",
    html: "html body"
  });

  console.log(`Message sent: ${info.messageId}`)
  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
}

const ddEmailTemplate = (formData: IDamagedDefect) => {
  const html = `
    <h2>VENDOR ACTION REQUIRED: Damaged/Defective Case ${formData.orderNumber}</h2>`
}