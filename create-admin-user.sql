-- Admin User Setup Script for Zikshana Global Foundation
-- This script creates an admin user with proper roles

-- Step 1: Insert ROLE_ADMIN if it doesn't exist
INSERT INTO roles (name)
SELECT 'ROLE_ADMIN'
WHERE NOT EXISTS (SELECT 1 FROM roles WHERE name = 'ROLE_ADMIN');

-- Step 2: Create admin user
-- Default credentials:
-- Email: admin@zikshana.org
-- Password: Admin@123
-- BCrypt hash generated for: Admin@123
INSERT INTO users (first_name, last_name, email, password, phone, is_active, created_at, updated_at)
VALUES (
    'Admin',
    'User',
    'admin@zikshana.org',
    '$2a$10$rZ3qKvHYvqHvVqVqVqVqVu5qKqKqKqKqKqKqKqKqKqKqKqKqKqKqK',  -- This is a placeholder, see instructions below
    '9999999999',
    true,
    NOW(),
    NOW()
)
ON DUPLICATE KEY UPDATE email = email;

-- Step 3: Get the user_id and role_id
SET @user_id = (SELECT id FROM users WHERE email = 'admin@zikshana.org');
SET @admin_role_id = (SELECT id FROM roles WHERE name = 'ROLE_ADMIN');

-- Step 4: Assign ADMIN role to user
INSERT INTO user_roles (user_id, role_id)
SELECT @user_id, @admin_role_id
WHERE NOT EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = @user_id AND role_id = @admin_role_id
);

-- Verify the admin user was created
SELECT
    u.id,
    u.first_name,
    u.last_name,
    u.email,
    u.is_active,
    r.name as role
FROM users u
JOIN user_roles ur ON u.id = ur.user_id
JOIN roles r ON ur.role_id = r.id
WHERE u.email = 'admin@zikshana.org';

-- ============================================================
-- IMPORTANT: GENERATE YOUR OWN PASSWORD HASH
-- ============================================================
--
-- The password hash above is a PLACEHOLDER. You MUST generate
-- your own BCrypt hash for security.
--
-- Option 1: Use Online BCrypt Generator
-- Visit: https://bcrypt-generator.com/
-- Enter your desired password
-- Use rounds: 10
-- Copy the generated hash
--
-- Option 2: Use Spring Boot Application
-- Create a simple class:
--
-- import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
--
-- public class GeneratePassword {
--     public static void main(String[] args) {
--         BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
--         String password = "YourSecurePassword123!";
--         String hash = encoder.encode(password);
--         System.out.println("Password hash: " + hash);
--     }
-- }
--
-- Option 3: Use the Backend API (after deployment)
-- You can add a temporary endpoint to generate password hashes
--
-- Then update the password:
-- UPDATE users
-- SET password = 'YOUR_GENERATED_BCRYPT_HASH'
-- WHERE email = 'admin@zikshana.org';
--
-- ============================================================

-- Additional admin users (optional)
-- Uncomment and modify as needed

-- INSERT INTO users (first_name, last_name, email, password, phone, is_active, created_at, updated_at)
-- VALUES (
--     'Second',
--     'Admin',
--     'admin2@zikshana.org',
--     '$2a$10$YOUR_BCRYPT_HASH_HERE',
--     '8888888888',
--     true,
--     NOW(),
--     NOW()
-- );

-- SET @user_id2 = (SELECT id FROM users WHERE email = 'admin2@zikshana.org');
-- INSERT INTO user_roles (user_id, role_id)
-- VALUES (@user_id2, @admin_role_id);
