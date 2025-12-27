# 🚀 Zikshana Contact Form - Ready to Use!

## ✅ Setup Complete!

Your contact form is **configured and ready** to send emails to **rexlerrajput@gmail.com**

### Email Credentials Configured:
- **Username:** Zikshana@gmail.com
- **App Password:** ✅ Configured (mnmg ztyi lddx clpa)

---

## 🎯 How to Start (2 Commands)

### Terminal 1 - Start Backend:
```bash
cd /Users/vijaysingh/Zikshana/ZikshanaGlobalFoundation/backend
./start-backend.sh
```

### Terminal 2 - Start Frontend:
```bash
cd /Users/vijaysingh/Zikshana/ZikshanaGlobalFoundation/frontend
npm run dev
```

**That's it!** 🎉

---

## 🧪 Test the Contact Form

### Option 1: Use the Website
1. Open: http://localhost:5173/contact
2. Fill out the form
3. Click "Send Message 📤"
4. Check **rexlerrajput@gmail.com** for the email!

### Option 2: Use Test Script
```bash
# Make sure backend is running first!
cd /Users/vijaysingh/Zikshana/ZikshanaGlobalFoundation
./test-contact-form.sh
```

---

## 📋 What Happens When Someone Submits the Form

1. User fills out contact form on your website
2. Form data sent to backend API
3. Backend sends email to **rexlerrajput@gmail.com**
4. Email contains:
   - Name
   - Email
   - Phone
   - Category
   - Message
5. User sees success message

---

## 🔍 Check if Backend is Running

```bash
# Check if port 8080 is in use
lsof -i :8080

# Or test the API
curl http://localhost:8080/api/contact
```

---

## ⚠️ Troubleshooting

### Backend won't start?
```bash
# Check Java version (need 17+)
java -version

# Check if port 8080 is already in use
lsof -i :8080
# If something is using it, kill it:
kill -9 <PID>
```

### Email not sending?
**Check backend logs** - you should see either:
- ✅ "Mail sent successfully"
- ❌ Error message (check credentials)

### Frontend can't connect to backend?
**Make sure:**
- ✅ Backend is running on http://localhost:8080
- ✅ You see "Started ZikshanaApplication" in backend logs
- ✅ Check browser console for CORS errors

---

## 📁 Important Files

**Backend:**
- Start Script: `backend/start-backend.sh`
- Email Service: `backend/src/main/java/org/zikshana/service/EmailService.java`
- Controller: `backend/src/main/java/org/zikshana/controller/ContactController.java`

**Frontend:**
- Contact Page: `frontend/src/pages/Contact.jsx`

**Testing:**
- Test Script: `test-contact-form.sh`

---

## 🌐 Production Deployment

When deploying to Hostinger, update the email recipient if needed in:

`backend/src/main/java/org/zikshana/service/EmailService.java` line 83:
```java
mailMessage.setTo("rexlerrajput@gmail.com"); // Change if needed
```

And update the API URL in `frontend/src/pages/Contact.jsx` line 53:
```javascript
const response = await fetch('https://yourdomain.com/api/contact', {
```

---

## 💡 Quick Commands Reference

```bash
# Start backend
cd backend && ./start-backend.sh

# Start frontend
cd frontend && npm run dev

# Test contact form
./test-contact-form.sh

# Check if backend is running
curl http://localhost:8080/actuator/health

# View backend logs
cd backend && tail -f logs/spring.log
```

---

## ✅ Current Configuration

- **Email From:** Zikshana@gmail.com
- **Email To:** rexlerrajput@gmail.com
- **Backend URL:** http://localhost:8080
- **Frontend URL:** http://localhost:5173
- **API Endpoint:** POST /api/contact
- **Daily Email Limit:** 500 emails (Gmail free tier)
- **Cost:** $0.00

---

## 🎉 You're All Set!

Just run:
1. `./backend/start-backend.sh`
2. `cd frontend && npm run dev`
3. Visit http://localhost:5173/contact
4. Test the form!

**Questions?** Check the troubleshooting section above or the detailed guides:
- `QUICK_START.md`
- `CONTACT_FORM_SETUP.md`
- `backend/EMAIL_SETUP_GUIDE.md`
