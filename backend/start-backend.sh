#!/bin/bash

# Zikshana Backend Startup Script
echo "🚀 Starting Zikshana Backend..."

# Set email credentials
export MAIL_USERNAME="Zikshana@gmail.com"
export MAIL_PASSWORD="mnmgztyilddxclpa"

# Navigate to backend directory
cd /Users/vijaysingh/Zikshana/ZikshanaGlobalFoundation/backend

# Start the backend with test profile (uses H2 in-memory database)
echo "📧 Email configured for: $MAIL_USERNAME"
echo "💾 Using H2 in-memory database (no PostgreSQL needed)"
echo "🔧 Building and starting Spring Boot application..."
mvn spring-boot:run -Dspring-boot.run.profiles=test
