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
  const categories = await UserModel.updateOne(
    { email },
    { password: newPass }
  );
  return categories;
};

export const verificationService = async (password: string) => {
  try {
    const users = await UserModel.findOne({ password });
    console.log("🚀 ~ loginService ~ users:", users);
    if (password == users.password) {
      const userInfo = {
        password: password,
      };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};
