# Contact Form Setup - Complete! ✅

## What's Been Implemented

Your contact form now sends emails through your **Spring Boot backend** - **completely free**, no third-party services needed!

### Backend Components (Zero Cost)
✅ **ContactRequest DTO** - Data transfer object for form data
✅ **EmailService** - Handles email sending via Gmail SMTP
✅ **ContactController** - REST API endpoint at `/api/contact`
✅ **Gmail SMTP Configuration** - Already configured in application.yml

### Frontend Updates
✅ **Removed EmailJS** - No more third-party dependencies
✅ **Backend Integration** - Form now calls your Spring Boot API
✅ **Loading States** - ⏳ Loading, ✅ Success, ❌ Error messages

### Email Destination
📧 All contact form submissions go to: **rexlerrajput@gmail.com**

---

## Quick Start (3 Steps)

### Step 1: Setup Gmail App Password (2 minutes)

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not enabled)
3. Click **App passwords**
4. Create a password for "Zikshana Backend"
5. Copy the 16-character password

### Step 2: Set Environment Variables

**Option A - Terminal (Mac/Linux):**
```bash
export MAIL_USERNAME="your-gmail@gmail.com"
export MAIL_PASSWORD="your-16-char-app-password"
```

**Option B - Terminal (Windows CMD):**
```cmd
set MAIL_USERNAME=your-gmail@gmail.com
set MAIL_PASSWORD=your-16-char-app-password
```

**Option C - Add to your IDE:**
- IntelliJ IDEA: Run → Edit Configurations → Environment Variables
- VS Code: Add to .env or launch.json

### Step 3: Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
./mvnw spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

✅ **Done!** Your contact form is now live!

---

## Testing

1. Visit: http://localhost:5173/contact
2. Fill out the form
3. Click "Send Message 📤"
4. Check **rexlerrajput@gmail.com** for the email!

---

## Cost Breakdown

| Component | Cost |
|-----------|------|
| Backend API | $0.00 |
| Email Sending | $0.00 (Gmail free tier) |
| Database | $0.00 (not needed) |
| Third-party Services | $0.00 (none used) |
| **Total** | **$0.00** |

**Gmail Limits:** 500 emails/day (more than enough!)

---

## What the Email Contains

```
New contact form submission:

Name: [User's Name]
Email: [User's Email]
Phone: [User's Phone or "Not provided"]
Category: [Volunteer/Donation/Partnership/CSR/General]

Message:
[User's Message]

---
This is an automated message from Zikshana Contact Form
```

---

## API Details

**Endpoint:** `POST http://localhost:8080/api/contact`

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "category": "Volunteer Inquiry",
  "message": "I would like to volunteer"
}
```

**Success Response (200):**
```json
{
  "message": "Thank you for reaching out! We will get back to you soon.",
  "status": "success"
}
```

**Error Response (500):**
```json
{
  "message": "Failed to send message. Please try again...",
  "status": "error",
  "error": "Error details"
}
```

---

## Troubleshooting

### "Connection refused" error in frontend
- ✅ Make sure backend is running on http://localhost:8080
- ✅ Check CORS settings in backend

### "Authentication failed" in backend logs
- ✅ Use App Password, not your Gmail password
- ✅ Verify MAIL_USERNAME and MAIL_PASSWORD are set
- ✅ Check 2-Step Verification is enabled

### Email not received
- ✅ Check spam/junk folder in rexlerrajput@gmail.com
- ✅ Check backend logs for errors
- ✅ Verify MAIL_USERNAME is correct

---

## File Locations

**Backend:**
- DTO: `backend/src/main/java/org/zikshana/dto/ContactRequest.java`
- Service: `backend/src/main/java/org/zikshana/service/EmailService.java`
- Controller: `backend/src/main/java/org/zikshana/controller/ContactController.java`
- Config: `backend/src/main/resources/application.yml`

**Frontend:**
- Contact Page: `frontend/src/pages/Contact.jsx`

**Documentation:**
- Backend Setup: `backend/EMAIL_SETUP_GUIDE.md`
- This File: `CONTACT_FORM_SETUP.md`

---

## Production Deployment

When deploying to production:

1. **Update API URL** in Contact.jsx:
   ```javascript
   const response = await fetch('https://api.yourdomain.com/api/contact', {
   ```

2. **Set Production Environment Variables:**
   - MAIL_USERNAME
   - MAIL_PASSWORD
   - Consider using a dedicated email account

3. **Update CORS** in application.yml:
   ```yaml
   cors:
     allowed-origins: https://yourdomain.com
   ```

4. **Add Rate Limiting** to prevent spam

5. **Consider Adding CAPTCHA** for extra security

---

## Next Steps (Optional)

Want to enhance the contact form? Consider:

- 📊 Save messages to database for record-keeping
- 🛡️ Add Google reCAPTCHA to prevent spam
- 📧 Send auto-reply email to user
- 📱 Add SMS notifications
- 📈 Add analytics tracking

---

**Need Help?**
Check `backend/EMAIL_SETUP_GUIDE.md` for detailed setup instructions.

**Current Status:**
🟢 Backend Ready
🟢 Frontend Ready
⏳ Waiting for Gmail credentials
