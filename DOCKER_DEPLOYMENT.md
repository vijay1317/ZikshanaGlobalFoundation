# Docker Deployment Guide

This guide explains how to deploy the Zikshana Global Foundation application using Docker containers.

## Architecture

The application consists of three main services:

1. **PostgreSQL Database** (postgres:15-alpine)
2. **Spring Boot Backend** (Java 17)
3. **React Frontend** (Nginx)

All services are orchestrated using Docker Compose and communicate through a private network.

## Prerequisites

- Docker Engine 20.10+ 
- Docker Compose 2.0+
- At least 4GB RAM available
- Ports 80, 8080, and 5432 available

## Quick Start

### 1. Clone and Navigate

```bash
cd /path/to/ZikshanaGlobalFoundation
```

### 2. Configure Environment

Copy the example environment file and edit it with your values:

```bash
cp .env.example .env
nano .env  # or use your preferred editor
```

**Required Environment Variables:**

```bash
# Database
POSTGRES_PASSWORD=your-secure-database-password

# Email (Gmail App Password required)
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-gmail-app-password

# Security
JWT_SECRET=your-very-long-and-secure-random-string-here
```

### 3. Start All Services

```bash
docker-compose up -d
```

This will:
- Build the backend and frontend Docker images
- Start PostgreSQL database
- Initialize the database schema
- Start the backend API server
- Start the frontend web server

### 4. Verify Deployment

Check all services are running:

```bash
docker-compose ps
```

You should see:
```
NAME                  STATUS    PORTS
zikshana-postgres     healthy   0.0.0.0:5432->5432/tcp
zikshana-backend      healthy   0.0.0.0:8080->8080/tcp
zikshana-frontend     healthy   0.0.0.0:80->80/tcp
```

### 5. Access the Application

- **Frontend**: http://localhost
- **Backend API**: http://localhost:8080/api
- **API Health**: http://localhost:8080/api/actuator/health

## Management Commands

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

### Stop Services

```bash
docker-compose stop
```

### Start Services

```bash
docker-compose start
```

### Restart Services

```bash
docker-compose restart
```

### Stop and Remove Containers

```bash
docker-compose down
```

### Stop and Remove Everything (including volumes)

**Warning**: This will delete all database data!

```bash
docker-compose down -v
```

### Rebuild Images

If you make code changes:

```bash
# Rebuild and restart
docker-compose up -d --build

# Rebuild specific service
docker-compose up -d --build backend
```

## Database Management

### Access PostgreSQL

```bash
docker exec -it zikshana-postgres psql -U zikshana -d zikshana
```

### Backup Database

```bash
docker exec zikshana-postgres pg_dump -U zikshana zikshana > backup.sql
```

### Restore Database

```bash
cat backup.sql | docker exec -i zikshana-postgres psql -U zikshana -d zikshana
```

## Troubleshooting

### Backend Not Starting

1. Check logs:
   ```bash
   docker-compose logs backend
   ```

2. Verify database is healthy:
   ```bash
   docker-compose ps postgres
   ```

3. Check environment variables:
   ```bash
   docker-compose config
   ```

### Frontend Not Accessible

1. Check if container is running:
   ```bash
   docker ps | grep frontend
   ```

2. View logs:
   ```bash
   docker-compose logs frontend
   ```

3. Verify build completed:
   ```bash
   docker-compose up --build frontend
   ```

### Database Connection Issues

1. Check PostgreSQL is running:
   ```bash
   docker-compose ps postgres
   ```

2. Test connection:
   ```bash
   docker exec zikshana-postgres pg_isready -U zikshana
   ```

3. Verify credentials in .env file

### Port Already in Use

If you see "port already allocated" error:

```bash
# Check what's using the port
lsof -i :80    # or :8080 or :5432

# Change port in .env file
FRONTEND_PORT=8081
BACKEND_PORT=8082
POSTGRES_PORT=5433
```

## Production Deployment

### Security Hardening

1. **Change Default Passwords**: Update all passwords in .env
2. **Update JWT Secret**: Generate a long random string
3. **Enable HTTPS**: Use a reverse proxy (nginx/caddy) with SSL
4. **Firewall Rules**: Restrict database port access
5. **Regular Updates**: Keep Docker images updated

### Recommended .env for Production

```bash
POSTGRES_PASSWORD=$(openssl rand -base64 32)
JWT_SECRET=$(openssl rand -base64 64)
CORS_ORIGINS=https://yourdomain.com
```

### Using with Reverse Proxy

Example nginx configuration:

```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Monitoring

### Health Checks

All services have built-in health checks:

```bash
# Check health status
docker inspect zikshana-backend | grep -A 10 Health
docker inspect zikshana-frontend | grep -A 10 Health
docker inspect zikshana-postgres | grep -A 10 Health
```

### Resource Usage

```bash
docker stats
```

### Disk Usage

```bash
docker system df
```

## Backup Strategy

### Automated Backups

Create a cron job for daily backups:

```bash
# Add to crontab
0 2 * * * docker exec zikshana-postgres pg_dump -U zikshana zikshana | gzip > /backup/zikshana-$(date +\%Y\%m\%d).sql.gz
```

## Scaling

### Horizontal Scaling

To run multiple backend instances:

```yaml
backend:
  deploy:
    replicas: 3
```

Add a load balancer (nginx) in front of backend instances.

## Support

For issues or questions:
- Check logs: `docker-compose logs -f`
- Review this guide
- Contact: info@zikshana.com

## Version Information

- Backend: Spring Boot 3.2.1, Java 17
- Frontend: React 18, Vite
- Database: PostgreSQL 15
- Web Server: Nginx (Alpine)
