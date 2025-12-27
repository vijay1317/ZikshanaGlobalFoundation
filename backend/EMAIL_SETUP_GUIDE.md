# Backend Email Setup Guide (Zero Cost Solution)

Your backend is now configured to send contact form emails to **rexlerrajput@gmail.com** using Gmail SMTP.

## Setup Steps (5 minutes)

### 1. Create Gmail App Password

Since you're using Gmail, you need to create an "App Password" for security:

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left menu
3. Enable **2-Step Verification** (if not already enabled)
4. After enabling 2-Step Verification, scroll down to **App passwords**
5. Click **App passwords**
6. Select **Mail** as the app and **Other** as the device
7. Name it "Zikshana Backend"
8. Click **Generate**
9. Copy the 16-character password (you'll need this in step 2)

### 2. Set Environment Variables

Before running your backend, set these environment variables:

**On Mac/Linux:**
```bash
export MAIL_USERNAME="your-gmail@gmail.com"
export MAIL_PASSWORD="your-16-char-app-password"
```

**On Windows (CMD):**
```cmd
set MAIL_USERNAME=your-gmail@gmail.com
set MAIL_PASSWORD=your-16-char-app-password
```

**On Windows (PowerShell):**
```powershell
$env:MAIL_USERNAME="your-gmail@gmail.com"
$env:MAIL_PASSWORD="your-16-char-app-password"
```

**Or add to your IDE environment variables:**
- IntelliJ IDEA: Run > Edit Configurations > Environment Variables
- VS Code: Add to launch.json

### 3. Start the Backend

```bash
cd backend
./mvnw spring-boot:run
```

Or if you're using Maven directly:
```bash
mvn spring-boot:run
```

The backend will run on: **http://localhost:8080**

### 4. Test the API

You can test the endpoint using curl:

```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "category": "General Question",
    "message": "This is a test message"
  }'
```

If successful, you should receive:
```json
{
  "message": "Thank you for reaching out! We will get back to you soon.",
  "status": "success"
}
```

And an email will be sent to **rexlerrajput@gmail.com**

## Configuration Details

- **Email Recipient:** rexlerrajput@gmail.com (hardcoded in EmailService.java line 84)
- **SMTP Server:** smtp.gmail.com:587
- **Authentication:** Required (using app password)
- **TLS:** Enabled
- **API Endpoint:** POST /api/contact
- **CORS:** Enabled for all origins (configure in production)

## Cost

**$0.00** - Completely free!
- Uses Gmail's free SMTP service
- No database needed (emails sent directly)
- No third-party service fees
- No infrastructure costs

## Gmail Sending Limits

Free Gmail accounts have these limits:
- **500 emails per day** (more than enough for a contact form)
- **500 recipients per day**

## Security Notes

- ✅ App Password is safer than your main Gmail password
- ✅ Never commit MAIL_PASSWORD to git
- ✅ Use environment variables for credentials
- ✅ Consider using a dedicated Gmail account for production

## Troubleshooting

### "Authentication failed" error
- Make sure you're using an App Password, not your Gmail password
- Verify 2-Step Verification is enabled
- Check that MAIL_USERNAME and MAIL_PASSWORD are set correctly

### "Connection refused" error
- Check if the backend is running on port 8080
- Verify firewall isn't blocking port 8080

### Email not received
- Check spam/junk folder
- Verify MAIL_USERNAME is correct
- Check backend logs for errors

## Alternative: Using a Different Email Service

If you prefer not to use Gmail, you can use other free SMTP services:

**SendGrid Free Tier:**
- 100 emails/day free
- Update application.yml:
  ```yaml
  mail:
    host: smtp.sendgrid.net
    port: 587
    username: apikey
    password: YOUR_SENDGRID_API_KEY
  ```

**Mailgun Free Tier:**
- 5,000 emails/month free
- Update application.yml with Mailgun SMTP settings

## Production Recommendations

For production deployment:
1. Use a dedicated email service account
2. Set up proper CORS origins (not "*")
3. Add rate limiting to prevent spam
4. Consider adding CAPTCHA to the form
5. Store contact messages in database for record-keeping
6. Use environment-specific configuration files

---

**Need Help?**
- Spring Boot Mail: https://docs.spring.io/spring-boot/docs/current/reference/html/io.html#io.email
- Gmail SMTP: https://support.google.com/mail/answer/7126229

**Current Status:**
✅ Backend API Ready
✅ Email Service Configured
⏳ Waiting for Gmail credentials
