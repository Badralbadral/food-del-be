import { UserModel } from "@/models/user.schema";
const nodemailer = require("nodemailer");
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: myEmail,
    pass: password,
  },
});

export const mailOption = {
  from: myEmail,
  to: myEmail,
};

export const changePassword = async (email: string, newPass: string) => {
  const users = await UserModel.findOne({ email: email });
  if (email == users.email) {
    const categories = await UserModel.updateOne(
      { email },
      { password: newPass }
    );
    console.log("successfully updated");
    return categories;
  } else {
    throw new Error("Invalid credentials");
  }
};

export const verificationService = async (
  code: string,
  newPassword: string
) => {
  const users = await UserModel.findOne({ password: code });
  if (code == users.password) {
    const changePassword = await UserModel.updateOne(
      { password: code },
      { password: newPassword }
    );
    console.log("successfully updated");
    return changePassword;
  } else {
    throw new Error("Invalid credentials");
  }
};
