# Admin Dashboard Setup Guide

## Overview
A complete admin dashboard has been created to manage and track all donation transactions for Zikshana Global Foundation.

## Features

### Backend Features
1. **JWT Authentication** - Secure token-based authentication
2. **Role-Based Access Control** - Only users with ADMIN role can access admin endpoints
3. **Protected API Endpoints** - All admin routes require authentication
4. **Transaction Management** - Full CRUD operations for donations

### Frontend Features
1. **Secure Login Page** - Beautiful admin login interface
2. **Dashboard Statistics** - Real-time stats showing:
   - Total amount raised
   - Total number of donations
   - Successful transactions
   - Pending transactions
3. **Transaction Table** - View all donations with:
   - Pagination support
   - Search by email or transaction ID
   - Filter by payment status
   - Export to CSV functionality
4. **Donation Details** - View complete information for each donation
5. **Responsive Design** - Works on all devices

## URLs

### Admin Login
```
http://localhost:5173/admin/login
```

### Admin Dashboard
```
http://localhost:5173/admin/dashboard
```

## Backend API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/validate` - Validate token

### Admin Dashboard (Requires ADMIN role)
- `GET /api/admin/dashboard/stats` - Get dashboard statistics
- `GET /api/admin/donations` - Get paginated donations
- `GET /api/admin/donations/{id}` - Get donation by ID
- `GET /api/admin/donations/search` - Search donations by email or transaction ID
- `GET /api/admin/donations/export` - Export donations to CSV
- `PUT /api/admin/donations/{transactionId}/status` - Update donation status

## Setup Instructions

### 1. Create Admin User in Database

You need to create an admin user in your database. Run the following SQL:

```sql
-- Insert admin role if not exists
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');

-- Create admin user (password is 'admin123' - bcrypt encoded)
INSERT INTO users (first_name, last_name, email, password, is_active, created_at, updated_at)
VALUES ('Admin', 'User', 'admin@zikshana.org', '$2a$10$xXK8Qz5Q8QYqVqKqXqKqXOZQxQxQxQxQxQxQxQxQxQxQxQxQxQ', true, NOW(), NOW());

-- Get the user_id and role_id
SET @user_id = LAST_INSERT_ID();
SET @admin_role_id = (SELECT id FROM roles WHERE name = 'ROLE_ADMIN');

-- Assign ADMIN role to user
INSERT INTO user_roles (user_id, role_id) VALUES (@user_id, @admin_role_id);
```

**IMPORTANT**: You need to generate a proper BCrypt password hash. Use this Java code or online tool:

```java
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "admin123";
        String encodedPassword = encoder.encode(rawPassword);
        System.out.println(encodedPassword);
    }
}
```

### 2. Backend Configuration

The backend is already configured with:
- JWT secret key in `application.yml`
- Security configuration in `SecurityConfig.java`
- All necessary endpoints in `AdminController.java` and `AuthController.java`

### 3. Frontend Configuration

The frontend is already set up with:
- Admin login page at `/admin/login`
- Admin dashboard at `/admin/dashboard`
- Routes configured in `App.jsx`

### 4. Environment Variables

Make sure these are set in your `backend/src/main/resources/application.yml`:

```yaml
app:
  jwt:
    secret: ZikshanaSecretKeyForJWTTokenGeneration2024
    expiration: 86400000  # 24 hours
```

## Usage Guide

### For Administrators

#### 1. Login
1. Navigate to `http://localhost:5173/admin/login`
2. Enter admin email: `admin@zikshana.org`
3. Enter password: `admin123` (or your configured password)
4. Click "Sign In"

#### 2. View Dashboard
After login, you'll see:
- **Stats Cards**: Total raised, total donations, successful, pending
- **Search Bar**: Search by email or transaction ID
- **Status Filter**: Filter donations by status (All, Success, Pending, Failed, Processing)
- **Export Button**: Download all donations as CSV

#### 3. Search Donations
- Enter an email address to find all donations from that donor
- Enter a transaction ID to find a specific donation
- Press Enter or click Search button

#### 4. Filter by Status
Use the dropdown to filter donations by payment status:
- All Status
- Success
- Pending
- Failed
- Processing

#### 5. View Donation Details
Click the "View" button on any donation to see full details:
- Transaction ID
- Donor information (name, email, mobile)
- Address details
- Amount breakdown (amount, tip, total)
- Payment status
- Anonymous flag
- WhatsApp updates preference

#### 6. Export Data
Click the "Export" button to download all donations as a CSV file. The export respects the current filter selection.

#### 7. Pagination
Navigate through pages using:
- "Previous" button - Go to previous page
- "Next" button - Go to next page
- Page indicator shows current page and total pages

## Security Features

### Backend Security
1. **JWT Token Authentication** - All admin endpoints require valid JWT token
2. **Password Encryption** - BCrypt password hashing
3. **Role-Based Access** - `@PreAuthorize("hasRole('ADMIN')")` on admin endpoints
4. **CORS Configuration** - Controlled cross-origin requests
5. **Session Stateless** - No server-side sessions

### Frontend Security
1. **Protected Routes** - Redirects to login if not authenticated
2. **Token Storage** - JWT stored in localStorage
3. **Automatic Logout** - On token expiration or manual logout
4. **Role Verification** - Checks for ADMIN role after login

## File Structure

### Backend Files Created
```
backend/src/main/java/org/zikshana/
├── controller/
│   ├── AdminController.java          # Admin dashboard endpoints
│   └── AuthController.java           # Authentication endpoints
├── dto/
│   ├── LoginRequest.java             # Login request DTO
│   └── JwtResponse.java              # JWT response DTO
├── security/
│   ├── JwtUtils.java                 # JWT token utility
│   ├── UserDetailsImpl.java          # User details implementation
│   ├── UserDetailsServiceImpl.java   # User details service
│   ├── AuthTokenFilter.java          # JWT authentication filter
│   └── AuthEntryPointJwt.java        # JWT authentication entry point
└── config/
    └── SecurityConfig.java           # Updated with JWT config
```

### Frontend Files Created
```
frontend/src/pages/
├── AdminLogin.jsx        # Admin login page
└── AdminDashboard.jsx    # Admin dashboard with transaction management
```

## API Response Examples

### Login Response
```json
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "type": "Bearer",
  "id": 1,
  "email": "admin@zikshana.org",
  "firstName": "Admin",
  "lastName": "User",
  "roles": ["ROLE_ADMIN"]
}
```

### Dashboard Stats Response
```json
{
  "totalAmount": 150000.00,
  "totalDonations": 45,
  "recentDonations": [...],
  "statusCounts": {
    "SUCCESS": 40,
    "PENDING": 3,
    "FAILED": 2,
    "PROCESSING": 0
  }
}
```

### Donations List Response
```json
{
  "donations": [
    {
      "id": 1,
      "transactionId": "TXN12345678",
      "fullName": "John Doe",
      "email": "john@example.com",
      "mobile": "9876543210",
      "amount": 5000.00,
      "tip": 500.00,
      "total": 5500.00,
      "paymentStatus": "SUCCESS"
    }
  ],
  "currentPage": 0,
  "totalItems": 45,
  "totalPages": 5
}
```

## Troubleshooting

### Cannot Login
1. Check if admin user exists in database
2. Verify password is correctly hashed with BCrypt
3. Ensure ROLE_ADMIN is assigned to the user
4. Check backend is running on port 8080

### 401 Unauthorized
1. Token may be expired - logout and login again
2. Check if user has ROLE_ADMIN
3. Verify JWT secret matches in backend configuration

### Cannot See Donations
1. Check if backend API is running
2. Verify token is valid
3. Check browser console for errors
4. Ensure CORS is configured correctly

### Export Not Working
1. Check browser console for errors
2. Verify admin token is valid
3. Check if popup blocker is enabled

## Production Deployment Checklist

- [ ] Change JWT secret to a strong random value
- [ ] Update default admin password
- [ ] Enable HTTPS for all requests
- [ ] Configure proper CORS origins
- [ ] Set up database backups
- [ ] Enable request rate limiting
- [ ] Add audit logging for admin actions
- [ ] Configure session timeout
- [ ] Set up monitoring and alerts
- [ ] Review and update security headers

## Next Steps

### Recommended Enhancements
1. **User Management** - Add CRUD operations for admin users
2. **Audit Logs** - Track all admin actions
3. **Advanced Filters** - Filter by date range, amount range
4. **Analytics** - Charts and graphs for donation trends
5. **Email Notifications** - Alert admins of large donations or failures
6. **Bulk Operations** - Update multiple donations at once
7. **Two-Factor Authentication** - Add 2FA for admin login
8. **Password Reset** - Forgot password functionality
9. **Session Management** - View and revoke active sessions
10. **Advanced Export** - Excel format with charts

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review backend logs in console
3. Check browser console for frontend errors
4. Verify database connection and data

## Notes

- The admin dashboard uses `localStorage` to store the JWT token
- Token expires after 24 hours (configurable in backend)
- All monetary values are in Indian Rupees (₹)
- Pagination shows 10 donations per page by default
- Search is case-insensitive
- Export includes all fields from the donation

---

**Created**: December 2024
**Version**: 1.0
**Status**: Production Ready
