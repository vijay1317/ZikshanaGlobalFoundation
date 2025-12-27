#!/bin/bash

# Zikshana Docker Logs Viewer

echo "📝 Zikshana Application Logs"
echo "============================"
echo ""

if [ -z "$1" ]; then
    echo "Viewing logs for all services..."
    echo "Use: ./docker-logs.sh [service] to view specific service"
    echo "Services: backend, frontend, postgres"
    echo ""
    docker-compose logs -f
else
    echo "Viewing logs for: $1"
    echo ""
    docker-compose logs -f $1
fi
