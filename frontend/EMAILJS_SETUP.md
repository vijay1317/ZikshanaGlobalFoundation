# EmailJS Setup Instructions for Contact Form

The contact form is now configured to send emails to **rexlerrajput@gmail.com** using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email service)
4. Click **"Connect Account"**
5. Sign in with **rexlerrajput@gmail.com**
6. Copy the **Service ID** (it will look like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use the following template configuration:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission - {{category}}

**Email Body:**
```
Hello,

You have received a new contact form submission from the Zikshana website.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Category: {{category}}

Message:
{{message}}

---
This is an automated message from Zikshana Contact Form
```

4. In the **"To email"** field, enter: `{{to_email}}`
5. In the **"From name"** field, enter: `{{from_name}}`
6. In the **"Reply to"** field, enter: `{{from_email}}`
7. Click **"Save"**
8. Copy the **Template ID** (it will look like `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (it will look like a long string of characters)
3. Copy this key

## Step 5: Update Contact.jsx

Open `/src/pages/Contact.jsx` and update lines 54-56 with your credentials:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID from Step 2
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID from Step 3
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key from Step 4
```

## Step 6: Test the Form

1. Run the development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check **rexlerrajput@gmail.com** for the email
5. You should receive an email with all the form details

## Important Notes

- **Free Tier Limit:** EmailJS free tier allows 200 emails per month
- **Spam Protection:** EmailJS has built-in spam protection
- **Email Delivery:** Emails are typically delivered within 1-2 minutes
- **Error Handling:** The form will show an error message if sending fails
- **File Attachments:** The current setup doesn't send file attachments (this requires a paid EmailJS plan)

## Troubleshooting

### Email not received?
- Check spam/junk folder
- Verify Service ID, Template ID, and Public Key are correct
- Make sure the email service is connected properly
- Check EmailJS dashboard for error logs

### Form shows error message?
- Open browser console (F12) to see detailed error
- Verify all EmailJS credentials are correct
- Check internet connection
- Ensure you haven't exceeded the monthly email limit

## Alternative: Using Your Own Email Service

If you prefer to use a different email service or need more control, you can:

1. Set up a backend server (Node.js, Python, etc.)
2. Use Nodemailer or similar library
3. Update the `handleSubmit` function to call your backend API

## Security Notes

- Public Key is safe to expose in frontend code
- Never expose API secrets or private keys in frontend
- EmailJS handles all email sending securely
- Form data is transmitted over HTTPS

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

**Current Configuration:**
- Recipient Email: rexlerrajput@gmail.com
- Form Fields: Name, Email, Phone, Category, Message
- Status Messages: Loading, Success, Error states implemented
