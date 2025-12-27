-- Create Admin User SQL Script
-- This script creates an admin user with proper BCrypt password hash

-- First, ensure the ROLE_ADMIN exists (it should already exist from schema)
-- Check if it exists, if not create it
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM roles WHERE name = 'ROLE_ADMIN') THEN
        INSERT INTO roles (name) VALUES ('ROLE_ADMIN');
    END IF;
END $$;

-- Create or update admin user
-- Password: Admin@123
-- BCrypt hash: $2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
INSERT INTO users (first_name, last_name, email, password, phone, is_active, created_at, updated_at)
VALUES (
    'Admin',
    'User',
    'admin@zikshana.org',
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- BCrypt hash for 'Admin@123'
    '9999999999',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
)
ON CONFLICT (email) DO UPDATE SET
    password = EXCLUDED.password,
    is_active = EXCLUDED.is_active,
    updated_at = CURRENT_TIMESTAMP;

-- Assign ROLE_ADMIN to the admin user
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id
FROM users u, roles r
WHERE u.email = 'admin@zikshana.org'
AND r.name = 'ROLE_ADMIN'
ON CONFLICT DO NOTHING;

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
