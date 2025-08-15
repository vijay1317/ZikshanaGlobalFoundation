# Zikshana Global Foundation - Local Setup Guide

This guide will help you set up the Zikshana Global Foundation website locally for development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **Java** (version 17 or higher) - [Download](https://adoptium.net/)
- **PostgreSQL** (version 15 or higher) - [Download](https://postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional, for containerized setup) - [Download](https://docker.com/)

## Quick Start (Docker - Recommended)

If you have Docker installed, this is the fastest way to get everything running:

```bash
# Clone the repository
git clone <repository-url>
cd ZikshanaGlobalFoundation

# Start all services with Docker Compose
docker-compose up --build

# Wait for all services to start, then visit:
# Frontend: http://localhost:3000
# Backend API: http://localhost:8080
# Swagger Documentation: http://localhost:8080/swagger-ui.html
```

## Manual Setup (Without Docker)

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd ZikshanaGlobalFoundation
```

### Step 2: Database Setup

#### Install PostgreSQL
1. Download and install PostgreSQL from [postgresql.org](https://postgresql.org/download/)
2. During installation, remember the password you set for the `postgres` user

#### Create Database
```bash
# Connect to PostgreSQL (you'll be prompted for password)
psql -U postgres

# Create database and user
CREATE DATABASE zikshana_db;
CREATE USER zikshana_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE zikshana_db TO zikshana_user;

# Exit PostgreSQL
\q
```

### Step 3: Backend Setup (Spring Boot)

```bash
# Navigate to backend directory
cd backend

# Make sure you have Java 17+ installed
java -version

# Install dependencies and run the application
./mvnw spring-boot:run

# If you're on Windows, use:
# mvnw.cmd spring-boot:run
```

The backend will start on `http://localhost:8080`

#### Verify Backend is Running
- Visit: http://localhost:8080/swagger-ui.html
- You should see the Swagger API documentation

### Step 4: Frontend Setup (React)

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will start on `http://localhost:5173`

#### Verify Frontend is Running
- Visit: http://localhost:5173
- You should see the Zikshana Global Foundation homepage

## Configuration

### Backend Configuration

Edit `backend/src/main/resources/application.yml` if needed:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/zikshana_db
    username: zikshana_user
    password: password
```

### Frontend Configuration

Create `frontend/.env` file if you need to customize API URL:

```bash
REACT_APP_API_URL=http://localhost:8080/api
```

## Testing the Setup

### Test Backend
1. Visit http://localhost:8080/swagger-ui.html
2. Try the `/api/programs/active` endpoint
3. You should see sample program data

### Test Frontend
1. Visit http://localhost:5173
2. Navigate through different pages
3. Check that the Hero section loads properly
4. Verify the Programs section shows data from the backend

### Test Integration
1. Go to the "Get Involved" page
2. Try filling out the volunteer form
3. Check backend logs to see if the data is received

## Troubleshooting

### Common Issues

#### Database Connection Error
```
Error: Connection refused to localhost:5432
```
**Solution:**
- Make sure PostgreSQL is running: `sudo service postgresql start` (Linux) or check Services (Windows)
- Verify database credentials in `application.yml`

#### Port Already in Use
```
Error: Port 8080 is already in use
```
**Solution:**
- Kill the process using the port: `lsof -ti:8080 | xargs kill -9` (Mac/Linux)
- Or change the port in `application.yml`: `server.port: 8081`

#### Node.js Version Error
```
Error: Requires Node.js version 18 or higher
```
**Solution:**
- Update Node.js to version 18+ from [nodejs.org](https://nodejs.org/)
- Or use Node Version Manager (nvm): `nvm install 18 && nvm use 18`

#### Java Version Error
```
Error: Unsupported Java version
```
**Solution:**
- Install Java 17+ from [adoptium.net](https://adoptium.net/)
- Set JAVA_HOME environment variable

### Backend Issues

#### Maven Build Fails
```bash
# Clean and rebuild
cd backend
./mvnw clean install

# Skip tests if needed
./mvnw clean install -DskipTests
```

#### Database Schema Issues
```bash
# Drop and recreate database
psql -U postgres -c "DROP DATABASE IF EXISTS zikshana_db;"
psql -U postgres -c "CREATE DATABASE zikshana_db;"

# Restart backend to recreate tables
./mvnw spring-boot:run
```

### Frontend Issues

#### npm install Fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Check for TypeScript errors
npm run build

# Fix linting issues
npm run lint --fix
```

## Development Workflow

### Making Changes

#### Backend Changes
1. Make changes to Java files
2. Spring Boot will auto-reload (if using `spring-boot-devtools`)
3. Test changes at http://localhost:8080

#### Frontend Changes
1. Make changes to React components
2. Vite will auto-reload the browser
3. See changes immediately at http://localhost:5173

### Adding New Features

#### Backend (New API Endpoint)
1. Create entity in `entity/` folder
2. Create repository in `repository/` folder
3. Create service in `service/` folder
4. Create controller in `controller/` folder
5. Test with Swagger UI

#### Frontend (New Page/Component)
1. Create component in `components/` or page in `pages/`
2. Add route in `App.jsx` (if it's a page)
3. Update navigation in `Header.jsx`
4. Style with Tailwind CSS classes

## Production Deployment

### Environment Variables

Create `.env` files for production:

#### Backend (`backend/.env`)
```bash
DB_USERNAME=production_user
DB_PASSWORD=secure_password
JWT_SECRET=production_jwt_secret_key
MAIL_USERNAME=your_email@domain.com
MAIL_PASSWORD=your_email_password
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

#### Frontend (`frontend/.env.production`)
```bash
REACT_APP_API_URL=https://your-domain.com/api
```

### Building for Production

#### Backend
```bash
cd backend
./mvnw clean package
java -jar target/zikshana-backend-0.0.1-SNAPSHOT.jar
```

#### Frontend
```bash
cd frontend
npm run build
# Deploy the 'dist' folder to your web server
```

## Next Steps

Once you have the application running locally:

1. **Explore the codebase** - Familiarize yourself with the project structure
2. **Read the API documentation** - Visit the Swagger UI
3. **Test all features** - Try volunteer registration, view programs, etc.
4. **Make your first contribution** - Pick an issue and submit a PR

## Getting Help

If you encounter any issues:

1. Check this troubleshooting guide
2. Search existing [GitHub Issues](issues-url)
3. Create a new issue with detailed error information
4. Contact the development team at dev@zikshana.org

## Useful Commands

### Backend
```bash
# Run tests
./mvnw test

# Generate test coverage report
./mvnw test jacoco:report

# Check for dependency updates
./mvnw versions:display-dependency-updates

# Format code
./mvnw spring-javaformat:apply
```

### Frontend
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format

# Analyze bundle size
npm run build:analyze
```

### Docker
```bash
# View logs
docker-compose logs -f [service-name]

# Restart a service
docker-compose restart [service-name]

# Update and rebuild
docker-compose up --build

# Clean up
docker-compose down -v
docker system prune
```

---

**Happy coding! 🚀**