# Zikshana Global Foundation Website

A complete NGO website built with React (frontend) and Spring Boot (backend), featuring a visually stunning, responsive design with emotional impact similar to professional NGO websites.

## 🌟 Features

### Frontend (React)
- **Modern Tech Stack**: React 18 with Vite
- **Stunning UI**: Tailwind CSS with custom design system
- **Smooth Animations**: Framer Motion for engaging user experience
- **Responsive Design**: Mobile-first approach with seamless adaptation
- **SEO Optimized**: React Helmet for meta tags and search engine optimization
- **Accessibility**: WCAG 2.1 compliant design

### Components
- **Hero Section**: Full-width banner with compelling taglines and CTAs
- **About Us**: Mission, vision, values with beautiful icons
- **Programs**: Grid layout showcasing initiatives with detailed descriptions
- **Impact Section**: Animated statistics and success metrics
- **Get Involved**: Volunteer registration and donation interface
- **Testimonials**: Carousel featuring community stories
- **Blog/News**: Recent activities and impact stories
- **Admin Dashboard**: Content management interface

### Backend (Spring Boot)
- **Modern Framework**: Spring Boot 3.x with Java 17
- **Database**: PostgreSQL with JPA/Hibernate
- **Security**: Spring Security with JWT authentication
- **Documentation**: Swagger/OpenAPI integration
- **Email Service**: Automated notifications and confirmations
- **Payment Integration**: Razorpay API for donations

### API Endpoints
- Programs CRUD operations
- Blog/news management
- Volunteer registration and management
- Donation processing with payment gateway
- User authentication and authorization
- Statistics and analytics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Java 17+
- PostgreSQL 15+
- Docker & Docker Compose (optional)

### Local Development Setup

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd ZikshanaGlobalFoundation
```

#### 2. Setup Database
```bash
# Create PostgreSQL database
createdb zikshana_db

# Create user (optional)
psql -c "CREATE USER zikshana_user WITH PASSWORD 'password';"
psql -c "GRANT ALL PRIVILEGES ON DATABASE zikshana_db TO zikshana_user;"
```

#### 3. Backend Setup
```bash
cd backend

# Install dependencies and run
./mvnw spring-boot:run

# Or build and run jar
./mvnw clean package
java -jar target/zikshana-backend-0.0.1-SNAPSHOT.jar
```

The backend will start on `http://localhost:8080`

#### 4. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on `http://localhost:5173`

### 🐳 Docker Deployment

#### Quick Start with Docker Compose
```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop services
docker-compose down

# View logs
docker-compose logs -f [service-name]
```

#### Services
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8080
- **Database**: localhost:5432
- **Nginx**: http://localhost (reverse proxy)

#### Individual Service Management
```bash
# Build specific service
docker-compose build frontend
docker-compose build backend

# Start specific service
docker-compose up frontend
docker-compose up backend postgres

# Scale services
docker-compose up --scale backend=2
```

## 📁 Project Structure

```
ZikshanaGlobalFoundation/
├── frontend/                    # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   └── Impact.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── GetInvolved.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Admin.jsx
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   ├── assets/             # Images and static files
│   │   ├── App.jsx             # Main App component
│   │   └── main.jsx            # Entry point
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── postcss.config.js       # PostCSS configuration
│   ├── vite.config.js          # Vite configuration
│   ├── package.json            # Dependencies
│   └── Dockerfile              # Frontend Docker config
├── backend/                     # Spring Boot backend
│   ├── src/main/java/org/zikshana/
│   │   ├── controller/         # REST controllers
│   │   │   ├── ProgramController.java
│   │   │   ├── VolunteerController.java
│   │   │   ├── BlogController.java
│   │   │   └── DonationController.java
│   │   ├── service/            # Business logic
│   │   │   ├── ProgramService.java
│   │   │   ├── VolunteerService.java
│   │   │   ├── BlogService.java
│   │   │   └── EmailService.java
│   │   ├── repository/         # Data access layer
│   │   │   ├── ProgramRepository.java
│   │   │   ├── VolunteerRepository.java
│   │   │   └── UserRepository.java
│   │   ├── entity/             # JPA entities
│   │   │   ├── Program.java
│   │   │   ├── Volunteer.java
│   │   │   ├── User.java
│   │   │   ├── BlogPost.java
│   │   │   └── Donation.java
│   │   ├── dto/                # Data Transfer Objects
│   │   ├── config/             # Configuration classes
│   │   ├── security/           # Security configuration
│   │   └── ZikshanaBackendApplication.java
│   ├── src/main/resources/
│   │   ├── application.yml     # Application configuration
│   │   └── data.sql           # Sample data (optional)
│   ├── pom.xml                # Maven dependencies
│   └── Dockerfile             # Backend Docker config
├── docker/                    # Docker configuration
│   ├── nginx/                 # Nginx configuration
│   ├── ssl/                   # SSL certificates
│   └── init.sql              # Database initialization
├── docker-compose.yml        # Docker Compose configuration
└── README.md                 # Project documentation
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-50: #f0f9ff
--primary-500: #0ea5e9
--primary-600: #0284c7

/* Secondary Colors */
--secondary-50: #fff7ed
--secondary-500: #f97316
--secondary-600: #ea580c

/* Neutral Colors */
--neutral-50: #fafaf9
--neutral-800: #292524
--neutral-900: #1c1917
```

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Elevated design with hover effects
- **Forms**: Clean, accessible input fields
- **Navigation**: Responsive with mobile menu

## 🔧 Configuration

### Environment Variables

#### Backend (.env or application.yml)
```yaml
# Database
DB_USERNAME=zikshana_user
DB_PASSWORD=your_password

# JWT Security
JWT_SECRET=your_jwt_secret_key

# Email Configuration
MAIL_HOST=smtp.gmail.com
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password

# Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# CORS
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

#### Frontend (.env)
```bash
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_SITE_URL=http://localhost:3000
```

### Production Configuration

#### Backend (application-prod.yml)
```yaml
spring:
  datasource:
    url: jdbc:postgresql://your-db-host:5432/zikshana_db
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false

logging:
  level:
    org.zikshana: INFO
    org.springframework.security: WARN
```

#### Environment Setup
```bash
# Production environment variables
export SPRING_PROFILES_ACTIVE=prod
export DB_USERNAME=production_user
export DB_PASSWORD=secure_password
export JWT_SECRET=production_jwt_secret
```

## 📊 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **API Docs**: http://localhost:8080/api-docs

### Key Endpoints

#### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/{id}` - Get program by ID
- `POST /api/programs` - Create program (Admin)
- `PUT /api/programs/{id}` - Update program (Admin)

#### Volunteers
- `POST /api/volunteers/register` - Register volunteer
- `GET /api/volunteers` - Get volunteers (Admin)
- `PUT /api/volunteers/{id}/status` - Update status (Admin)

#### Donations
- `POST /api/donations` - Create donation
- `POST /api/donations/verify` - Verify payment
- `GET /api/donations` - Get donations (Admin)

## 🧪 Testing

### Backend Testing
```bash
cd backend

# Run all tests
./mvnw test

# Run specific test class
./mvnw test -Dtest=ProgramServiceTest

# Run integration tests
./mvnw test -Dtest=*IT
```

### Frontend Testing
```bash
cd frontend

# Run unit tests
npm test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📈 Performance Optimization

### Frontend
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: `npm run build:analyze`
- **Caching**: Service worker for offline capability

### Backend
- **Database Indexing**: Optimized queries with proper indexes
- **Connection Pooling**: HikariCP configuration
- **Caching**: Redis integration for frequently accessed data
- **Monitoring**: Actuator endpoints for health checks

## 🔒 Security Features

### Frontend
- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Secure communication
- **Input Validation**: Client-side form validation
- **Auth State Management**: Secure token handling

### Backend
- **JWT Authentication**: Stateless authentication
- **CORS Configuration**: Controlled cross-origin requests
- **SQL Injection Prevention**: Parameterized queries
- **Rate Limiting**: API endpoint protection
- **Data Validation**: Input sanitization

## 🚀 Deployment

### Production Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates installed
- [ ] DNS records configured
- [ ] Monitoring setup
- [ ] Backup strategy implemented
- [ ] CI/CD pipeline configured

### Cloud Deployment Options

#### AWS
```bash
# Deploy to AWS ECS
aws ecs deploy-cluster --cluster zikshana-cluster

# Deploy to AWS Elastic Beanstalk
eb init && eb deploy
```

#### Azure
```bash
# Deploy to Azure Container Instances
az container create --resource-group zikshana-rg
```

#### DigitalOcean
```bash
# Deploy to DigitalOcean App Platform
doctl apps create --spec .do/app.yaml
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Development Guidelines
- Follow ESLint rules for frontend
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation

## 📞 Support

For questions and support:
- **Email**: dev@zikshana.org
- **Documentation**: [Wiki](wiki-url)
- **Issues**: [GitHub Issues](issues-url)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from professional NGO websites
- Open source community for excellent libraries
- Contributors and volunteers
- Zikshana Global Foundation team

---

**Built with ❤️ for making a difference in communities worldwide.**