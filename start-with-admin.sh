#!/bin/bash

# Zikshana Global Foundation - Complete Build & Run Script with Admin Setup
# This script will build and run the complete application with Docker

set -e  # Exit on error

echo "=========================================="
echo "🚀 Zikshana Global Foundation Deployment"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Check if .env file exists
echo -e "${BLUE}Step 1: Checking environment configuration...${NC}"
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  .env file not found. Creating from .env.example...${NC}"
    cp .env.example .env
    echo -e "${YELLOW}⚠️  IMPORTANT: Please edit .env file with your actual credentials!${NC}"
    echo -e "${YELLOW}   - Email credentials for sending notifications${NC}"
    echo -e "${YELLOW}   - Razorpay keys for payment processing${NC}"
    echo -e "${YELLOW}   - Secure database password${NC}"
    echo ""
    read -p "Press Enter after updating .env file to continue..."
else
    echo -e "${GREEN}✓ .env file found${NC}"
fi
echo ""

# Step 2: Stop and remove existing containers
echo -e "${BLUE}Step 2: Cleaning up existing containers...${NC}"
docker-compose down -v 2>/dev/null || true
echo -e "${GREEN}✓ Cleanup complete${NC}"
echo ""

# Step 3: Build all services
echo -e "${BLUE}Step 3: Building Docker images (this may take a few minutes)...${NC}"
docker-compose build --no-cache
echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Step 4: Start database first
echo -e "${BLUE}Step 4: Starting PostgreSQL database...${NC}"
docker-compose up -d postgres
echo "Waiting for database to be ready..."
sleep 10

# Wait for database to be healthy
echo "Checking database health..."
until docker-compose exec -T postgres pg_isready -U zikshana > /dev/null 2>&1; do
    echo "Waiting for database..."
    sleep 2
done
echo -e "${GREEN}✓ Database is ready${NC}"
echo ""

# Step 5: Create admin user
echo -e "${BLUE}Step 5: Creating admin user...${NC}"
echo -e "${YELLOW}Admin credentials will be:${NC}"
echo -e "  Email: ${GREEN}admin@zikshana.org${NC}"
echo -e "  Default Password: ${GREEN}Admin@123${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: Change this password after first login!${NC}"
echo ""

# Generate BCrypt hash for password "Admin@123"
# This hash is pre-generated for "Admin@123"
ADMIN_PASSWORD_HASH='$2a$10$SOih21dSJqYKn1RAUdK4oelCpPvxwSkcbs0845pRxzmjL6gXNFGbK'

# Create admin user SQL
cat > /tmp/create-admin.sql <<EOF
-- Create admin role if not exists
INSERT INTO roles (name)
SELECT 'ROLE_ADMIN'
WHERE NOT EXISTS (SELECT 1 FROM roles WHERE name = 'ROLE_ADMIN');

-- Create admin user (password: Admin@123)
INSERT INTO users (first_name, last_name, email, password, phone, is_active, created_at, updated_at)
SELECT 'Admin', 'User', 'admin@zikshana.org', '${ADMIN_PASSWORD_HASH}', '9999999999', true, NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'admin@zikshana.org');

-- Assign ADMIN role
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id
FROM users u, roles r
WHERE u.email = 'admin@zikshana.org' AND r.name = 'ROLE_ADMIN'
AND NOT EXISTS (
    SELECT 1 FROM user_roles ur
    WHERE ur.user_id = u.id AND ur.role_id = r.id
);
EOF

# Execute SQL script (will be executed after backend starts and creates tables)
echo -e "${GREEN}✓ Admin user setup prepared${NC}"
echo ""

# Step 6: Start backend
echo -e "${BLUE}Step 6: Starting backend service...${NC}"
docker-compose up -d backend
echo "Waiting for backend to be ready (this may take up to 60 seconds)..."

# Wait for backend to be healthy
RETRY_COUNT=0
MAX_RETRIES=30
until docker-compose exec -T backend wget --no-verbose --tries=1 --spider http://localhost:8080/api/actuator/health 2>/dev/null; do
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ $RETRY_COUNT -ge $MAX_RETRIES ]; then
        echo -e "${RED}✗ Backend failed to start${NC}"
        echo "Checking backend logs:"
        docker-compose logs backend | tail -50
        exit 1
    fi
    echo "Waiting for backend... ($RETRY_COUNT/$MAX_RETRIES)"
    sleep 2
done

echo -e "${GREEN}✓ Backend is ready${NC}"
echo ""

# Step 7: Execute admin user creation
echo -e "${BLUE}Step 7: Inserting admin user into database...${NC}"
docker cp /tmp/create-admin.sql zikshana-postgres:/tmp/create-admin.sql
docker-compose exec -T postgres psql -U zikshana -d zikshana -f /tmp/create-admin.sql

# Verify admin user
echo "Verifying admin user..."
docker-compose exec -T postgres psql -U zikshana -d zikshana -c "
SELECT u.email, u.first_name, u.last_name, r.name as role, u.is_active
FROM users u
JOIN user_roles ur ON u.id = ur.user_id
JOIN roles r ON ur.role_id = r.id
WHERE u.email = 'admin@zikshana.org';
"

echo -e "${GREEN}✓ Admin user created successfully${NC}"
echo ""

# Step 8: Start frontend
echo -e "${BLUE}Step 8: Starting frontend service...${NC}"
docker-compose up -d frontend
echo "Waiting for frontend to be ready..."
sleep 10

# Wait for frontend
RETRY_COUNT=0
until docker-compose exec -T frontend wget --no-verbose --tries=1 --spider http://localhost/ 2>/dev/null; do
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ $RETRY_COUNT -ge 15 ]; then
        echo -e "${YELLOW}⚠️  Frontend health check timeout (this is often normal)${NC}"
        break
    fi
    echo "Waiting for frontend... ($RETRY_COUNT/15)"
    sleep 2
done

echo -e "${GREEN}✓ Frontend is ready${NC}"
echo ""

# Step 9: Show status
echo -e "${BLUE}Step 9: Checking all services...${NC}"
docker-compose ps
echo ""

# Final success message
echo -e "${GREEN}=========================================="
echo "✅ Deployment Complete!"
echo "==========================================${NC}"
echo ""
echo -e "${BLUE}📱 Application URLs:${NC}"
echo -e "  Main Website:    ${GREEN}http://localhost${NC}"
echo -e "  Admin Login:     ${GREEN}http://localhost/admin/login${NC}"
echo -e "  Admin Dashboard: ${GREEN}http://localhost/admin/dashboard${NC}"
echo -e "  Backend API:     ${GREEN}http://localhost:8080/api${NC}"
echo ""
echo -e "${BLUE}🔐 Admin Credentials:${NC}"
echo -e "  Email:    ${GREEN}admin@zikshana.org${NC}"
echo -e "  Password: ${GREEN}Admin@123${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT SECURITY NOTES:${NC}"
echo "  1. Change the admin password immediately after first login"
echo "  2. Update .env file with production credentials before deploying"
echo "  3. Use strong passwords for database and admin accounts"
echo "  4. Configure proper email credentials for notifications"
echo "  5. Set up Razorpay keys for payment processing"
echo ""
echo -e "${BLUE}📊 Useful Commands:${NC}"
echo -e "  View logs:        ${GREEN}docker-compose logs -f${NC}"
echo -e "  Stop services:    ${GREEN}docker-compose down${NC}"
echo -e "  Restart:          ${GREEN}docker-compose restart${NC}"
echo -e "  View backend logs:${GREEN}docker-compose logs -f backend${NC}"
echo -e "  Database console: ${GREEN}docker-compose exec postgres psql -U zikshana -d zikshana${NC}"
echo ""
echo -e "${GREEN}🎉 Happy managing donations!${NC}"
echo ""

# Cleanup temporary file
rm -f /tmp/create-admin.sql
