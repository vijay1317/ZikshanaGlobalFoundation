# Docker Setup Complete! 🐳

Your Zikshana Global Foundation application has been fully containerized.

## What Was Created

### Docker Configuration Files

1. **backend/Dockerfile** - Multi-stage build for Spring Boot backend
2. **frontend/Dockerfile** - Multi-stage build with Nginx for React frontend  
3. **docker-compose.yml** - Orchestrates all 3 services (PostgreSQL, Backend, Frontend)
4. **backend/init-db.sql** - Database initialization script
5. **backend/src/main/resources/application-prod.yml** - Production configuration

### Environment Configuration

1. **.env** - Environment variables with your Gmail credentials pre-configured
2. **.env.example** - Template for future deployments
3. **.gitignore** - Protects sensitive files from git

### Helper Scripts

1. **docker-start.sh** - Automated deployment script
2. **docker-stop.sh** - Graceful shutdown with data protection
3. **docker-logs.sh** - Easy log viewing

### Documentation

1. **DOCKER_DEPLOYMENT.md** - Complete deployment guide
2. **README-DOCKER.md** - Quick reference guide
3. **nginx.conf** - Frontend web server configuration

## Quick Start

### Option 1: Automated (Recommended)

```bash
cd /Users/vijaysingh/Zikshana/ZikshanaGlobalFoundation
./docker-start.sh
```

### Option 2: Manual

```bash
docker-compose up -d
```

## Access Points

Once running:

- **Frontend Website**: http://localhost
- **Backend API**: http://localhost:8080/api
- **Health Check**: http://localhost:8080/api/actuator/health
- **Contact Form**: http://localhost/contact

## Architecture

```
                    Internet
                        │
                        ▼
        ┌──────────────────────────────┐
        │   Nginx (Frontend)           │
        │   React SPA                  │
        │   Port: 80                   │
        └───────────┬──────────────────┘
                    │
                    ▼ API Calls
        ┌──────────────────────────────┐
        │   Spring Boot (Backend)      │
        │   REST API                   │
        │   Port: 8080                 │
        └───────────┬──────────────────┘
                    │
                    ▼ SQL Queries
        ┌──────────────────────────────┐
        │   PostgreSQL (Database)      │
        │   Persistent Storage         │
        │   Port: 5432                 │
        └──────────────────────────────┘
```

## Features

### Backend Container
- ✅ Java 17 runtime
- ✅ Spring Boot 3.2.1
- ✅ PostgreSQL connection
- ✅ Gmail SMTP configured
- ✅ Health checks enabled
- ✅ Multi-stage build (optimized size)
- ✅ Non-root user for security

### Frontend Container
- ✅ React 18 production build
- ✅ Nginx web server
- ✅ Gzip compression
- ✅ Security headers
- ✅ SPA routing support
- ✅ Static asset caching
- ✅ Health checks enabled

### Database Container
- ✅ PostgreSQL 15 Alpine
- ✅ Persistent volume
- ✅ Automatic schema creation
- ✅ Health checks enabled
- ✅ Initialization script

## Email Configuration (Already Set)

Your Gmail credentials are configured in `.env`:

```bash
MAIL_USERNAME=Zikshana@gmail.com
MAIL_PASSWORD=mnmgztyilddxclpa
```

Contact form emails will be sent to: **rexlerrajput@gmail.com**

## Database Configuration (Already Set)

```bash
POSTGRES_DB=zikshana
POSTGRES_USER=zikshana
POSTGRES_PASSWORD=Zikshana2024SecurePassword!
```

## Security Features

1. **Non-root containers** - Backend and frontend run as unprivileged users
2. **Environment variables** - Sensitive data not in code
3. **Health checks** - Auto-restart on failure
4. **Security headers** - XSS, clickjacking protection
5. **Database isolation** - Only accessible by backend
6. **.env ignored** - Credentials not committed to git

## Common Commands

### Start Everything
```bash
./docker-start.sh
```

### View Logs
```bash
./docker-logs.sh          # All services
./docker-logs.sh backend  # Just backend
```

### Stop Everything
```bash
./docker-stop.sh
```

### Restart After Code Changes
```bash
docker-compose up -d --build
```

### Database Backup
```bash
docker exec zikshana-postgres pg_dump -U zikshana zikshana > backup.sql
```

### Check Service Health
```bash
docker-compose ps
```

## Testing

### 1. Start Services
```bash
./docker-start.sh
```

### 2. Test Frontend
```bash
curl http://localhost
# Should return HTML
```

### 3. Test Backend
```bash
curl http://localhost:8080/api/actuator/health
# Should return: {"status":"UP"}
```

### 4. Test Contact Form
```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "category": "General Question",
    "message": "Test from Docker deployment"
  }'
```

Should send email to rexlerrajput@gmail.com

## Production Deployment

### On Hostinger or Any VPS

1. **Install Docker**:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

2. **Clone Your Repository**:
```bash
git clone <your-repo-url>
cd ZikshanaGlobalFoundation
```

3. **Configure Environment**:
```bash
cp .env.example .env
nano .env  # Update with production values
```

4. **Start Services**:
```bash
./docker-start.sh
```

5. **Set Up Reverse Proxy** (for HTTPS):
```bash
# Install Caddy (automatic HTTPS)
sudo apt install caddy

# Configure Caddy
sudo nano /etc/caddy/Caddyfile
```

Add:
```
yourdomain.com {
    reverse_proxy localhost:80
}

api.yourdomain.com {
    reverse_proxy localhost:8080
}
```

### Update CORS for Production

In `.env`:
```bash
CORS_ORIGINS=https://yourdomain.com,https://api.yourdomain.com
```

## Monitoring

### View Resource Usage
```bash
docker stats
```

### Check Logs
```bash
docker-compose logs -f --tail=100
```

### Disk Usage
```bash
docker system df
```

## Backup Strategy

### Automated Backups

Add to crontab (crontab -e):
```bash
0 2 * * * cd /path/to/ZikshanaGlobalFoundation && docker exec zikshana-postgres pg_dump -U zikshana zikshana | gzip > /backups/zikshana-$(date +\%Y\%m\%d).sql.gz
```

## Troubleshooting

### "Port already allocated"
```bash
# Change ports in .env
FRONTEND_PORT=8081
BACKEND_PORT=8082
```

### "Database connection failed"
```bash
# Check PostgreSQL is running
docker-compose ps postgres

# Check logs
docker-compose logs postgres
```

### "502 Bad Gateway"
```bash
# Backend not ready - check logs
docker-compose logs backend

# Restart backend
docker-compose restart backend
```

## File Structure

```
ZikshanaGlobalFoundation/
├── docker-compose.yml          ← Main orchestration
├── .env                        ← Your credentials (DO NOT COMMIT)
├── .env.example               ← Template
├── docker-start.sh            ← Start script
├── docker-stop.sh             ← Stop script
├── docker-logs.sh             ← Logs viewer
├── DOCKER_DEPLOYMENT.md       ← Full guide
├── README-DOCKER.md           ← Quick reference
├── backend/
│   ├── Dockerfile             ← Backend image definition
│   ├── .dockerignore
│   ├── init-db.sql
│   └── src/main/resources/
│       └── application-prod.yml
└── frontend/
    ├── Dockerfile             ← Frontend image definition
    ├── nginx.conf             ← Web server config
    └── .dockerignore
```

## Next Steps

1. ✅ **Test locally** - Run `./docker-start.sh`
2. ✅ **Verify email** - Submit contact form
3. ✅ **Check logs** - Ensure no errors
4. 📦 **Deploy to production** - Follow production guide
5. 🔒 **Set up HTTPS** - Use Caddy or Nginx with Let's Encrypt
6. 📊 **Set up monitoring** - Consider Prometheus/Grafana
7. 💾 **Schedule backups** - Use cron for automated backups

## Support

For help:
- 📖 Read [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md)
- 📝 Check logs: `./docker-logs.sh`
- 🔍 Review status: `docker-compose ps`
- 📧 Contact: info@zikshana.com

## Summary

✅ **Backend** - Containerized with PostgreSQL
✅ **Frontend** - Optimized production build with Nginx
✅ **Database** - Persistent PostgreSQL with auto-init
✅ **Email** - Configured with your Gmail credentials
✅ **Scripts** - Automated deployment and management
✅ **Documentation** - Complete guides included
✅ **Security** - Best practices implemented
✅ **Health Checks** - Auto-restart on failure

**Your application is now ready for deployment!** 🚀

Run `./docker-start.sh` to begin!
