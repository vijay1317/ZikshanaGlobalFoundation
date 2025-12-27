#!/bin/bash

echo "🧪 Testing Zikshana Contact Form..."
echo ""

# Test the backend API
echo "📤 Sending test email to rexlerrajput@gmail.com..."
echo ""

curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "category": "General Question",
    "message": "This is a test message from the Zikshana contact form"
  }' \
  --silent --show-error --write-out "\n\nHTTP Status: %{http_code}\n"

echo ""
echo "✅ If you see status 200, check rexlerrajput@gmail.com for the email!"
echo "❌ If you see status 500 or error, check backend logs"
