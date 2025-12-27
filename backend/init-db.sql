-- Zikshana Database Initialization Script
-- This script will run automatically when PostgreSQL container starts for the first time

-- Note: The database and user are created automatically by the postgres image
-- using POSTGRES_DB, POSTGRES_USER, and POSTGRES_PASSWORD environment variables
-- This script runs AFTER that initialization

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- The tables will be created automatically by Hibernate/JPA
-- This file is here for any custom initialization needed

-- You can add initial data here if needed
-- For example:
-- INSERT INTO roles (name) VALUES ('ROLE_USER'), ('ROLE_ADMIN');

SELECT 'Database initialized successfully' AS status;
