# 🚀 Quick Start Guide - Zikshana Global Foundation

## One-Command Deployment

Run the complete application with admin dashboard in just one command!

```bash
./start-with-admin.sh
```

This will:
1. ✅ Check and create .env configuration
2. ✅ Build all Docker images
3. ✅ Start PostgreSQL database
4. ✅ Start Spring Boot backend
5. ✅ Create admin user automatically
6. ✅ Start React frontend
7. ✅ Verify all services are running

---

## Access Your Application

After running the script (takes 2-5 minutes), access:

### 🌐 Main Website
```
http://localhost
```

### 👨‍💼 Admin Panel
```
Login:     http://localhost/admin/login
Dashboard: http://localhost/admin/dashboard
```

**Default Admin Credentials:**
- Email: `admin@zikshana.org`
- Password: `Admin@123`

⚠️ **IMPORTANT:** Change this password after first login!

---

## Before First Run

### 1. Create .env File

If `.env` doesn't exist, copy from example:
```bash
cp .env.example .env
```

### 2. Update Required Credentials

Edit `.env` and update:

```bash
# Email Configuration (for sending donation confirmations)
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password

# Razorpay Configuration (for payment processing)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Database (change in production)
POSTGRES_PASSWORD=your-secure-password
```

### 3. Run Deployment Script

```bash
./start-with-admin.sh
```

---

## Manual Step-by-Step (Alternative)

If you prefer manual control:

### 1. Start Database
```bash
docker-compose up -d postgres
```

### 2. Wait for Database
```bash
sleep 10
```

### 3. Start Backend
```bash
docker-compose up -d backend
```

### 4. Create Admin User
```bash
docker-compose exec -T postgres psql -U zikshana -d zikshana -f create-admin-user.sql
```

### 5. Start Frontend
```bash
docker-compose up -d frontend
```

---

## Useful Commands

### View All Logs
```bash
docker-compose logs -f
```

### View Backend Logs Only
```bash
docker-compose logs -f backend
```

### View Frontend Logs Only
```bash
docker-compose logs -f frontend
```

### Stop All Services
```bash
docker-compose down
```

### Stop and Remove Data
```bash
docker-compose down -v
```

### Restart Services
```bash
docker-compose restart
```

### Access Database
```bash
docker-compose exec postgres psql -U zikshana -d zikshana
```

### Check Service Status
```bash
docker-compose ps
```

---

## Troubleshooting

### Services Won't Start

1. **Check if ports are available:**
   ```bash
   lsof -i :80    # Frontend
   lsof -i :8080  # Backend
   lsof -i :5432  # PostgreSQL
   ```

2. **Stop conflicting services:**
   ```bash
   docker-compose down
   # Kill other processes using ports 80, 8080, or 5432
   ```

3. **Rebuild images:**
   ```bash
   docker-compose build --no-cache
   docker-compose up -d
   ```

### Cannot Login to Admin

1. **Verify admin user exists:**
   ```bash
   docker-compose exec postgres psql -U zikshana -d zikshana -c \
     "SELECT email, first_name, is_active FROM users WHERE email='admin@zikshana.org';"
   ```

2. **Recreate admin user:**
   ```bash
   docker cp create-admin-user.sql zikshana-postgres:/tmp/
   docker-compose exec postgres psql -U zikshana -d zikshana -f /tmp/create-admin-user.sql
   ```

3. **Check backend logs:**
   ```bash
   docker-compose logs backend | tail -50
   ```

### Database Connection Issues

```bash
# Check database health
docker-compose exec postgres pg_isready -U zikshana

# View database logs
docker-compose logs postgres

# Restart database
docker-compose restart postgres
```

### Frontend Not Loading

```bash
# Check frontend status
docker-compose ps frontend

# View frontend logs
docker-compose logs frontend

# Restart frontend
docker-compose restart frontend
```

---

## Development Mode

For development with hot reload:

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Access frontend at: `http://localhost:5173`

---

## Production Deployment

### 1. Update Environment Variables

Edit `.env`:
```bash
# Use production database
POSTGRES_PASSWORD=strong-random-password

# Use production domain
CORS_ORIGINS=https://yourdomain.com

# Production JWT secret
JWT_SECRET=very-long-random-secret-key

# Production email
MAIL_USERNAME=noreply@yourdomain.com

# Production Razorpay keys
RAZORPAY_KEY_ID=production_key
RAZORPAY_KEY_SECRET=production_secret
```

### 2. Use Production Profile

```bash
SPRING_PROFILES_ACTIVE=prod docker-compose up -d
```

### 3. Enable HTTPS

Update nginx configuration or use reverse proxy (Nginx/Apache).

### 4. Set Up Monitoring

- Enable application metrics
- Configure logging
- Set up alerts

---

## Security Checklist

Before going to production:

- [ ] Change default admin password
- [ ] Update all passwords in .env
- [ ] Use strong JWT secret (64+ characters)
- [ ] Enable HTTPS
- [ ] Configure firewall rules
- [ ] Set up database backups
- [ ] Enable rate limiting
- [ ] Review CORS origins
- [ ] Configure proper email credentials
- [ ] Use production Razorpay keys
- [ ] Enable audit logging
- [ ] Set up monitoring and alerts

---

## Getting Help

### Check Documentation

1. [ADMIN_DASHBOARD_SETUP.md](ADMIN_DASHBOARD_SETUP.md) - Complete admin setup guide
2. [ADMIN_DASHBOARD_SUMMARY.md](ADMIN_DASHBOARD_SUMMARY.md) - Feature overview
3. [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) - Docker deployment guide

### Common Issues

**Q: Admin login not working?**
A: Verify admin user exists in database and password is correct.

**Q: Donations not showing?**
A: Check backend logs and database connection.

**Q: Payment not working?**
A: Verify Razorpay keys are configured in .env.

**Q: Emails not sending?**
A: Check MAIL_USERNAME and MAIL_PASSWORD in .env.

---

## Next Steps

After successful deployment:

1. ✅ Login to admin dashboard
2. ✅ Change admin password
3. ✅ Test donation flow
4. ✅ Configure email notifications
5. ✅ Set up payment gateway
6. ✅ Add more admin users if needed
7. ✅ Configure backup strategy
8. ✅ Set up monitoring

---

## Support

For issues or questions:
- Check the troubleshooting section above
- Review backend logs: `docker-compose logs backend`
- Check database: `docker-compose exec postgres psql -U zikshana`
- Review frontend console in browser DevTools

---

**Happy managing donations! 🎉**
