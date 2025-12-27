#!/bin/bash

# Zikshana Docker Stop Script

echo "🛑 Stopping Zikshana Application"
echo "================================"
echo ""

# Ask if user wants to remove volumes
echo "Do you want to remove database volumes? (This will DELETE all data)"
read -p "Remove volumes? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗑️  Stopping and removing containers, networks, and volumes..."
    docker-compose down -v
    echo "✅ All containers, networks, and volumes removed!"
else
    echo "🛑 Stopping containers..."
    docker-compose down
    echo "✅ Containers stopped. Volumes preserved."
fi

echo ""
echo "📊 Remaining containers:"
docker ps -a | grep zikshana || echo "No Zikshana containers running"
echo ""
echo "💾 Remaining volumes:"
docker volume ls | grep zikshana || echo "No Zikshana volumes found"
