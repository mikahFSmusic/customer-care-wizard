"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// function for sending emails on submission of damaged/defective form
// TODO: finish generalized emailing function that returns correct email function by type
const getHTML = (type) => {
    switch (type) {
        case "damaged_defect":
    }
};
// TODO: create html template for DD form
exports.ddEmail = (recipients, formData) => __awaiter(void 0, void 0, void 0, function* () {
    let testAccount = yield nodemailer_1.default.createTestAccount();
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        },
    });
    let info = yield transporter.sendMail({
        from: "mikah.feldmanstein@gmail.com",
        to: recipients || "mikah.feldmanstein@gmail.com",
        subject: "Test",
        text: "plain text body",
        html: "html body"
    });
    console.log(`Message sent: ${info.messageId}`);
    console.log(`Preview URL: ${nodemailer_1.default.getTestMessageUrl(info)}`);
});
const ddEmailTemplate = (formData) => {
    const html = `
    <h2>VENDOR ACTION REQUIRED: Damaged/Defective Case ${formData.orderNumber}</h2>`;
};
