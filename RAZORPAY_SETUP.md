# Razorpay Integration Setup Guide

## Overview
The donation system uses Razorpay for payment processing. You need to configure Razorpay API keys to enable the donation functionality.

## Problem Fixed
The donation backend was showing the error:
```
"error": "Failed to create order: Failed to create Razorpay order: BAD_REQUEST_ERROR:Authentication failed"
```

This was because Razorpay API keys were not configured.

## Solution

### Step 1: Get Razorpay API Keys

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up or log in to your account
3. Navigate to **Settings** → **API Keys**
4. Click on **Generate Test Keys** (for testing) or **Generate Live Keys** (for production)
5. You will get:
   - **Key ID** (starts with `rzp_test_` for test mode or `rzp_live_` for live mode)
   - **Key Secret** (keep this secure and never commit to Git)

### Step 2: Configure Environment Variables

1. Open the `.env` file in the project root:
   ```bash
   cd /Users/vijaysingh/Zikshana/ZikshanaGlobalFoundation
   nano .env
   ```

2. Update the Razorpay configuration:
   ```bash
   # Razorpay Configuration
   RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID_HERE
   RAZORPAY_KEY_SECRET=YOUR_KEY_SECRET_HERE
   ```

3. Save the file (in nano: `Ctrl+O`, `Enter`, `Ctrl+X`)

### Step 3: Restart Docker Containers

After updating the `.env` file, restart the Docker containers to apply the changes:

```bash
cd /Users/vijaysingh/Zikshana/ZikshanaGlobalFoundation
docker-compose down
docker-compose up -d
```

Wait for the containers to be healthy (about 30-60 seconds):
```bash
docker ps
```

### Step 4: Test the Integration

1. Open your browser and go to: `http://localhost/donate`
2. Fill in the donation form
3. Click "Proceed to Pay"
4. You should see the Razorpay checkout popup

## How It Works

### Architecture Flow
```
User Browser (http://localhost/donate)
    ↓
    Fills donation form and clicks "Proceed to Pay"
    ↓
    POST /api/donations → Creates donation record in database
    ↓
    POST /api/donations/razorpay/create-order → Creates Razorpay order
    ↓
    Razorpay Checkout Modal opens in browser
    ↓
    User completes payment on Razorpay
    ↓
    POST /api/donations/razorpay/verify-payment → Verifies payment signature
    ↓
    Updates donation status to SUCCESS
```

### Configuration Files Modified

1. **`.env`** - Added Razorpay environment variables
2. **`docker-compose.yml`** - Added Razorpay environment variables to backend service
3. **`backend/src/main/resources/application-prod.yml`** - Added Razorpay configuration section

### Security Notes

⚠️ **IMPORTANT**:
- Never commit your `.env` file to Git
- The `.env` file is already in `.gitignore`
- Keep your `RAZORPAY_KEY_SECRET` secure
- Use **Test Keys** for development and testing
- Use **Live Keys** only in production

## Testing with Test Mode

Razorpay provides test cards for testing:

### Test Cards
- **Card Number**: 4111 1111 1111 1111
- **CVV**: Any 3 digits
- **Expiry**: Any future date
- **Name**: Any name

### Test UPI
- **UPI ID**: success@razorpay

### Test Netbanking
- Select any bank and use the test credentials provided by Razorpay

## Troubleshooting

### Error: "Authentication failed"
- Check that `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are set in `.env`
- Ensure the keys are correct (copy-paste from Razorpay dashboard)
- Restart Docker containers after updating `.env`

### Error: "Key ID or Key Secret is blank"
- Check that environment variables are being passed to the backend container:
  ```bash
  docker exec zikshana-backend env | grep RAZORPAY
  ```
- If empty, restart containers: `docker-compose down && docker-compose up -d`

### Payment Verification Failed
- Check that the same `RAZORPAY_KEY_SECRET` is used for both order creation and verification
- Check backend logs: `docker logs zikshana-backend`

## Production Deployment

When deploying to production:

1. **Switch to Live Keys**:
   - Generate live keys from Razorpay dashboard
   - Update `.env` with live keys
   - **Never commit these to Git**

2. **Update CORS Origins**:
   - Update `CORS_ORIGINS` in `.env` to include your production domain:
     ```
     CORS_ORIGINS=https://yourdomain.com
     ```

3. **SSL Certificate**:
   - Ensure your production domain has a valid SSL certificate
   - Razorpay requires HTTPS for live mode

4. **Webhook Configuration** (Optional but recommended):
   - Set up webhooks in Razorpay dashboard to receive payment notifications
   - Add webhook endpoint in your backend

## Support

- Razorpay Documentation: https://razorpay.com/docs/
- Test Credentials: https://razorpay.com/docs/payments/payments/test-card-details/
- API Reference: https://razorpay.com/docs/api/

## Summary

✅ **Fixed Issues**:
1. Added Razorpay environment variables to `.env`
2. Updated `docker-compose.yml` to pass Razorpay keys to backend
3. Updated `application-prod.yml` to read Razorpay configuration
4. Frontend-backend communication fixed with nginx reverse proxy

✅ **Next Steps**:
1. Get Razorpay API keys from dashboard
2. Update `.env` file with your keys
3. Restart Docker containers
4. Test donation flow at `http://localhost/donate`
