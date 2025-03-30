export const Verification_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Email</title>
      <style>
          body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9f9f9;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 12px;
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
              overflow: hidden;
              border: 2px solid #e0e0e0;
          }
          .header {
              background-color: #6200ea;
              color: white;
              padding: 25px;
              text-align: center;
              font-size: 28px;
              font-weight: 600;
          }
          .content {
              padding: 30px;
              font-size: 18px;
              text-align: center;
              line-height: 1.8;
          }
          .verification-code {
              display: inline-block;
              margin: 20px 0;
              font-size: 24px;
              color: #6200ea;
              background: #ede7f6;
              border: 2px dashed #6200ea;
              padding: 12px 18px;
              text-align: center;
              border-radius: 8px;
              font-weight: bold;
              letter-spacing: 2px;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 20px;
              text-align: center;
              color: #777;
              font-size: 14px;
              border-top: 2px solid #e0e0e0;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">PVPSIT Events - Verify Your Email</div>
          <div class="content">
              <p>Hello,</p>
              <p>Thank you for signing up! Please confirm your email address by entering the code below:</p>
              <span class="verification-code">{verificationCode}</span>
              <p>If you did not sign up for PVPSIT Events, you can ignore this email.</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} PVPSIT Events. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

export const Welcome_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to PVPSIT Events</title>
      <style>
          body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9f9f9;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 12px;
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
              overflow: hidden;
              border: 2px solid #e0e0e0;
          }
          .header {
              background-color: #6200ea;
              color: white;
              padding: 25px;
              text-align: center;
              font-size: 28px;
              font-weight: 600;
          }
          .content {
              padding: 30px;
              font-size: 18px;
              line-height: 1.8;
              text-align: center;
          }
          .welcome-message {
              font-size: 22px;
              font-weight: bold;
              margin-bottom: 20px;
              color: #6200ea;
          }
          .button {
              display: inline-block;
              padding: 14px 28px;
              margin: 20px 0;
              background-color: #6200ea;
              color: white;
              text-decoration: none;  /* Ensure no underline for the button */
              border-radius: 8px;
              font-size: 18px;
              font-weight: bold;
              border: none;  /* Make it look like a button */
              cursor: pointer;  /* Show pointer cursor on hover */
              transition: background-color 0.3s;
          }
          .button:hover {
              background-color: #3700b3;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 20px;
              text-align: center;
              color: #777;
              font-size: 14px;
              border-top: 2px solid #e0e0e0;
          }
          /* Remove any default styling for <a> links */
          a {
              text-decoration: none;  /* No underline for <a> */
              color: inherit;  /* Inherit color from button styling */
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Welcome to PVPSIT Events!</div>
          <div class="content">
              <p class="welcome-message">Hi {name},</p>
              <p>Welcome to the PVPSIT Events community! We're thrilled to have you onboard.</p>
              <p>Here's how to get started:</p>
              <ul style="text-align: left; margin: 20px auto; width: 80%; list-style: disc;">
                  <li>Browse upcoming events and sign up.</li>
                  <li>Connect with other participants and network.</li>
                  <li>Stay updated on the latest opportunities.</li>
              </ul>
              <!-- Using <a> tag for URL redirection without applying styles directly to it -->
              <a href="https://pvpsit-events.vercel.app" target="_blank">
                  <button class="button">Explore Events</button>
              </a>
              <p>If you need any help or have questions, feel free to reach out.</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} PVPSIT Events. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

export const Password_Reset_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset OTP</title>
      <style>
          body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9f9f9;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 12px;
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
              overflow: hidden;
              border: 2px solid #e0e0e0;
          }
          .header {
              background-color: #6200ea;
              color: white;
              padding: 25px;
              text-align: center;
              font-size: 28px;
              font-weight: 600;
          }
          .content {
              padding: 30px;
              font-size: 18px;
              text-align: center;
              line-height: 1.8;
          }
          .otp {
              display: inline-block;
              margin: 20px 0;
              font-size: 24px;
              color: #6200ea;
              background: #ede7f6;
              border: 2px dashed #6200ea;
              padding: 12px 18px;
              text-align: center;
              border-radius: 8px;
              font-weight: bold;
              letter-spacing: 2px;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 20px;
              text-align: center;
              color: #777;
              font-size: 14px;
              border-top: 2px solid #e0e0e0;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Password Reset - PVPSIT Events</div>
          <div class="content">
              <p>Hello,</p>
              <p>We received a request to reset your password. Please use the OTP below to reset your password:</p>
              <span class="otp">{otp}</span>
              <p>If you did not request this, you can ignore this email.</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} PVPSIT Events. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;