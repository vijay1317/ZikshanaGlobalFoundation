#!/bin/bash

# Zikshana Docker Deployment Script

set -e

echo "🚀 Starting Zikshana Application with Docker"
echo "=============================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found!"
    echo "📋 Creating .env from .env.example..."
    cp .env.example .env
    echo ""
    echo "⚠️  IMPORTANT: Please edit .env file with your actual credentials before continuing!"
    echo ""
    echo "Required variables to update:"
    echo "  - POSTGRES_PASSWORD"
    echo "  - MAIL_USERNAME"
    echo "  - MAIL_PASSWORD"
    echo "  - JWT_SECRET"
    echo ""
    read -p "Press Enter after you've updated .env file, or Ctrl+C to cancel..."
fi

# Stop any running containers
echo "🛑 Stopping any existing containers..."
docker-compose down 2>/dev/null || true
echo ""

# Build and start services
echo "🔨 Building Docker images..."
docker-compose build --no-cache
echo ""

echo "🚀 Starting services..."
docker-compose up -d
echo ""

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
sleep 10

# Check service health
echo ""
echo "📊 Service Status:"
echo "=================="
docker-compose ps
echo ""

# Show logs
echo "📝 Recent logs:"
echo "==============="
docker-compose logs --tail=20
echo ""

# Final message
echo "✅ Deployment Complete!"
echo ""
echo "🌐 Access your application:"
echo "   Frontend:  http://localhost"
echo "   Backend:   http://localhost:8080/api"
echo "   Health:    http://localhost:8080/api/actuator/health"
echo ""
echo "📊 View logs:         docker-compose logs -f"
echo "🛑 Stop services:     docker-compose stop"
echo "🗑️  Remove all:        docker-compose down -v"
echo ""
echo "📚 For more info, see: DOCKER_DEPLOYMENT.md"
