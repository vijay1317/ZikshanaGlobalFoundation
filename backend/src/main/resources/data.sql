-- Insert roles
INSERT INTO roles (name) VALUES ('ROLE_USER');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');
INSERT INTO roles (name) VALUES ('ROLE_VOLUNTEER');

-- Insert sample programs
INSERT INTO programs (title, description, full_description, category, status, beneficiaries_count, locations_count, budget, target_amount, raised_amount, created_at, updated_at) VALUES
('Education for All', 'Providing quality education and learning resources to underserved communities.', 'Our comprehensive education program focuses on providing quality learning opportunities to children and adults in underserved communities. We establish learning centers, provide educational materials, train teachers, and offer scholarship programs.', 'EDUCATION', 'ACTIVE', 8500, 35, 1500000.00, 2000000.00, 750000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Healthcare Access', 'Bringing essential healthcare services to remote areas.', 'Our healthcare program brings essential medical services to communities that lack adequate healthcare infrastructure through mobile medical camps and health education programs.', 'HEALTHCARE', 'ACTIVE', 12000, 50, 2500000.00, 3000000.00, 1200000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Community Development', 'Building sustainable infrastructure and economic opportunities.', 'Our community development initiatives focus on building sustainable infrastructure and creating economic opportunities that strengthen entire communities.', 'COMMUNITY_DEVELOPMENT', 'ACTIVE', 15000, 40, 3000000.00, 4000000.00, 1800000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Women Empowerment', 'Empowering women through skills and leadership development.', 'Our women empowerment program focuses on providing women with the skills, knowledge, and opportunities they need to achieve economic independence.', 'WOMEN_EMPOWERMENT', 'ACTIVE', 4200, 25, 1200000.00, 1500000.00, 600000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert sample volunteers
INSERT INTO volunteers (full_name, email, phone, skills, availability, status, notes, created_at, updated_at) VALUES
('Priya Sharma', 'priya.sharma@email.com', '+91-9876543210', 'Teaching, Content Writing, Community Outreach', 'WEEKDAYS', 'ACTIVE', 'Excellent communication skills and dedication to education', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Rajesh Kumar', 'rajesh.kumar@email.com', '+91-9876543211', 'Healthcare, Medical Assistance, Community Health', 'WEEKENDS', 'ACTIVE', 'Medical background with rural healthcare experience', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Meera Patel', 'meera.patel@email.com', '+91-9876543212', 'Digital Marketing, Social Media, Graphic Design', 'FLEXIBLE', 'PENDING', 'Creative professional with marketing expertise', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Arjun Singh', 'arjun.singh@email.com', '+91-9876543213', 'Project Management, Event Organization, Leadership', 'EVENINGS', 'ACTIVE', 'Strong leadership and organizational skills', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert volunteer interests (Note: H2 may handle this differently, so we'll create the mapping in a simpler way)
-- This data will be handled by the application logic instead