import { transporter } from "./Email.config.js";
import { Verification_Email_Template, Welcome_Email_Template } from "./EmailTemplate.js";
import { Password_Reset_Email_Template } from "./EmailTemplate.js"; // New email template for OTP

export const sendVerificationEmail = async (email, verificationCode) => {
    if (!verificationCode) {
        console.log('Verification code is undefined');
        return;
    }
    
    try {
        const response = await transporter.sendMail({
            from: '"PVPSIT Events" <saigovvala2346@gmail.com>',
            to: email,
            subject: "Verify your Email",
            text: "Verify your Email",
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode)
        });
        console.log('Email sent successfully', response);
    } catch (error) {
        console.log('Email error', error);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"PVPSIT Events" <saigovvala2346@gmail.com>',
            to: email,
            subject: "Welcome Email",
            text: "Welcome Email",
            html: Welcome_Email_Template.replace("{name}", name)
        });
        console.log('Email sent successfully', response);
    } catch (error) {
        console.log('Email error', error);
    }
};

export const sendPasswordResetEmail = async (email, otp) => {
    if (!otp) {
        console.log('OTP is undefined');
        return;
    }

    try {
        const response = await transporter.sendMail({
            from: '"PVPSIT Events" <your-email@gmail.com>',
            to: email,
            subject: "Password Reset OTP",
            text: "Password Reset OTP",
            html: Password_Reset_Email_Template.replace("{otp}", otp)
        });
        console.log('OTP email sent successfully', response);
    } catch (error) {
        console.log('Email error', error);
    }
};

export default sendWelcomeEmail;