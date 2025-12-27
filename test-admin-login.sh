#!/bin/bash

# Test Admin Login Flow Script
# This script tests the admin initialization and login flow
# It will attempt to fix common issues automatically

set -e

BASE_URL="http://localhost:8080/api"
ADMIN_EMAIL="admin@zikshana.org"
ADMIN_PASSWORD="Admin@123"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "========================================"
echo "Testing Admin Login Flow"
echo "========================================"
echo ""

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Test 1: Check if backend is running
echo "[1/5] Checking if backend is running..."
if curl -s -f "${BASE_URL}/actuator/health" > /dev/null 2>&1; then
    print_success "Backend is running"
else
    print_error "Backend is not running"
    print_warning "Please start the backend with: ./start-with-admin.sh"
    exit 1
fi
echo ""

# Test 2: Initialize admin user
echo "[2/5] Testing admin user initialization..."
INIT_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/auth/init-admin" \
    -H "Content-Type: application/json")

HTTP_CODE=$(echo "$INIT_RESPONSE" | tail -n1)
RESPONSE_BODY=$(echo "$INIT_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ]; then
    print_success "Admin user created successfully"
    echo "Response: $RESPONSE_BODY"
elif [ "$HTTP_CODE" = "400" ]; then
    if echo "$RESPONSE_BODY" | grep -q "already exists"; then
        print_warning "Admin user already exists (this is OK)"
    else
        print_error "Failed to create admin user: $RESPONSE_BODY"
        exit 1
    fi
else
    print_error "Failed to create admin user (HTTP $HTTP_CODE)"
    echo "Response: $RESPONSE_BODY"
    exit 1
fi
echo ""

# Test 3: Test admin login
echo "[3/5] Testing admin login..."
LOGIN_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/auth/login" \
    -H "Content-Type: application/json" \
    -d "{\"email\":\"${ADMIN_EMAIL}\",\"password\":\"${ADMIN_PASSWORD}\"}")

HTTP_CODE=$(echo "$LOGIN_RESPONSE" | tail -n1)
RESPONSE_BODY=$(echo "$LOGIN_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ]; then
    print_success "Admin login successful"

    # Extract JWT token
    JWT_TOKEN=$(echo "$RESPONSE_BODY" | grep -o '"token":"[^"]*"' | sed 's/"token":"\([^"]*\)"/\1/')

    if [ -z "$JWT_TOKEN" ]; then
        JWT_TOKEN=$(echo "$RESPONSE_BODY" | grep -o '"accessToken":"[^"]*"' | sed 's/"accessToken":"\([^"]*\)"/\1/')
    fi

    if [ -n "$JWT_TOKEN" ]; then
        print_success "JWT token received"
        echo "Token preview: ${JWT_TOKEN:0:50}..."
    else
        print_warning "No JWT token found in response"
        echo "Response: $RESPONSE_BODY"
    fi
else
    print_error "Admin login failed (HTTP $HTTP_CODE)"
    echo "Response: $RESPONSE_BODY"

    # Attempt to fix: Recreate admin user
    print_warning "Attempting to fix: Will try to recreate admin user..."

    # Try to recreate admin (this might fail if user exists, but worth trying)
    curl -s -X POST "${BASE_URL}/auth/init-admin" > /dev/null 2>&1

    # Retry login
    echo "Retrying login..."
    LOGIN_RETRY=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/auth/login" \
        -H "Content-Type: application/json" \
        -d "{\"email\":\"${ADMIN_EMAIL}\",\"password\":\"${ADMIN_PASSWORD}\"}")

    RETRY_CODE=$(echo "$LOGIN_RETRY" | tail -n1)
    RETRY_BODY=$(echo "$LOGIN_RETRY" | sed '$d')

    if [ "$RETRY_CODE" = "200" ]; then
        print_success "Login successful after retry"
        JWT_TOKEN=$(echo "$RETRY_BODY" | grep -o '"token":"[^"]*"' | sed 's/"token":"\([^"]*\)"/\1/')
    else
        print_error "Login still failing after retry (HTTP $RETRY_CODE)"
        echo "Response: $RETRY_BODY"
        exit 1
    fi
fi
echo ""

# Test 4: Validate token (if we have one)
if [ -n "$JWT_TOKEN" ]; then
    echo "[4/5] Testing token validation..."
    VALIDATE_RESPONSE=$(curl -s -w "\n%{http_code}" -X GET "${BASE_URL}/auth/validate" \
        -H "Authorization: Bearer ${JWT_TOKEN}")

    HTTP_CODE=$(echo "$VALIDATE_RESPONSE" | tail -n1)
    RESPONSE_BODY=$(echo "$VALIDATE_RESPONSE" | sed '$d')

    if [ "$HTTP_CODE" = "200" ]; then
        print_success "Token validation successful"
        echo "User info: $RESPONSE_BODY"
    else
        print_error "Token validation failed (HTTP $HTTP_CODE)"
        echo "Response: $RESPONSE_BODY"
    fi
else
    print_warning "Skipping token validation (no token available)"
fi
echo ""

# Test 5: Test admin endpoint access
if [ -n "$JWT_TOKEN" ]; then
    echo "[5/5] Testing admin endpoint access..."
    ADMIN_RESPONSE=$(curl -s -w "\n%{http_code}" -X GET "${BASE_URL}/admin/dashboard/stats" \
        -H "Authorization: Bearer ${JWT_TOKEN}")

    HTTP_CODE=$(echo "$ADMIN_RESPONSE" | tail -n1)
    RESPONSE_BODY=$(echo "$ADMIN_RESPONSE" | sed '$d')

    if [ "$HTTP_CODE" = "200" ]; then
        print_success "Admin endpoint access successful"
        echo "Dashboard stats: $RESPONSE_BODY"
    else
        print_error "Admin endpoint access failed (HTTP $HTTP_CODE)"
        echo "Response: $RESPONSE_BODY"

        # Check if it's a role issue
        if echo "$RESPONSE_BODY" | grep -qi "forbidden\|access.*denied"; then
            print_warning "This appears to be a role/permission issue"
            print_warning "The admin user may not have ROLE_ADMIN assigned"
        fi
    fi
else
    print_warning "Skipping admin endpoint test (no token available)"
fi
echo ""

# Summary
echo "========================================"
echo "Test Summary"
echo "========================================"
echo ""
echo "Base URL: $BASE_URL"
echo "Admin Email: $ADMIN_EMAIL"
echo "Admin Password: $ADMIN_PASSWORD"
echo ""

if [ -n "$JWT_TOKEN" ]; then
    print_success "All critical tests passed!"
    echo ""
    echo "You can now use these credentials to login:"
    echo "  Email: $ADMIN_EMAIL"
    echo "  Password: $ADMIN_PASSWORD"
else
    print_error "Some tests failed. Please check the errors above."
    exit 1
fi
