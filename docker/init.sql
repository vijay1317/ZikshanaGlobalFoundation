-- Initialize database with sample data

-- Insert roles
INSERT INTO roles (name) VALUES ('ROLE_USER') ON CONFLICT DO NOTHING;
INSERT INTO roles (name) VALUES ('ROLE_ADMIN') ON CONFLICT DO NOTHING;
INSERT INTO roles (name) VALUES ('ROLE_VOLUNTEER') ON CONFLICT DO NOTHING;

-- Insert sample programs
INSERT INTO programs (title, description, full_description, category, status, beneficiaries_count, locations_count, budget, target_amount, raised_amount, created_at, updated_at) VALUES
('Education for All', 'Providing quality education and learning resources to underserved communities.', 'Our comprehensive education program focuses on providing quality learning opportunities to children and adults in underserved communities. We establish learning centers, provide educational materials, train teachers, and offer scholarship programs.', 'EDUCATION', 'ACTIVE', 8500, 35, 1500000.00, 2000000.00, 750000.00, NOW(), NOW()),
('Healthcare Access', 'Bringing essential healthcare services to remote areas.', 'Our healthcare program brings essential medical services to communities that lack adequate healthcare infrastructure through mobile medical camps and health education programs.', 'HEALTHCARE', 'ACTIVE', 12000, 50, 2500000.00, 3000000.00, 1200000.00, NOW(), NOW()),
('Community Development', 'Building sustainable infrastructure and economic opportunities.', 'Our community development initiatives focus on building sustainable infrastructure and creating economic opportunities that strengthen entire communities.', 'COMMUNITY_DEVELOPMENT', 'ACTIVE', 15000, 40, 3000000.00, 4000000.00, 1800000.00, NOW(), NOW()),
('Women Empowerment', 'Empowering women through skills and leadership development.', 'Our women empowerment program focuses on providing women with the skills, knowledge, and opportunities they need to achieve economic independence.', 'WOMEN_EMPOWERMENT', 'ACTIVE', 4200, 25, 1200000.00, 1500000.00, 600000.00, NOW(), NOW());

-- Insert sample blog posts
INSERT INTO blog_posts (title, excerpt, content, category, is_published, is_featured, read_time, view_count, created_at, updated_at) VALUES
('Transforming Education in Rural Maharashtra', 'How our education program has helped over 500 children in remote villages gain access to quality learning opportunities.', 'Our education initiative in rural Maharashtra has been a remarkable journey of transformation. Through dedicated efforts and community partnership, we have established learning centers that serve as beacons of hope for children who previously had limited access to quality education.', 'EDUCATION', true, true, 5, 1250, NOW(), NOW()),
('Healthcare Accessibility: Breaking Barriers', 'Our mobile health camps have provided medical care to over 1000 families in underserved areas.', 'Healthcare accessibility remains one of the biggest challenges in remote communities. Our mobile health camps have been instrumental in bringing medical care directly to those who need it most.', 'HEALTHCARE', true, false, 4, 890, NOW(), NOW()),
('Women Entrepreneurs: Stories of Independence', 'Meet the inspiring women who have built successful businesses through our skills training programs.', 'Economic empowerment of women has been a cornerstone of our development approach. Through our comprehensive skills training programs, we have witnessed remarkable transformations.', 'WOMEN_EMPOWERMENT', true, false, 6, 720, NOW(), NOW()),
('Community Development: Building Together', 'How we are creating lasting change through water systems, roads, and community centers.', 'Sustainable infrastructure development is essential for long-term community growth. Our community development projects focus on creating lasting change.', 'COMMUNITY_DEVELOPMENT', true, false, 7, 650, NOW(), NOW());

-- Insert sample volunteers
INSERT INTO volunteers (full_name, email, phone, skills, availability, status, notes, created_at, updated_at) VALUES
('Priya Sharma', 'priya.sharma@email.com', '+91-9876543210', 'Teaching, Content Writing, Community Outreach', 'WEEKDAYS', 'ACTIVE', 'Excellent communication skills and dedication to education', NOW(), NOW()),
('Rajesh Kumar', 'rajesh.kumar@email.com', '+91-9876543211', 'Healthcare, Medical Assistance, Community Health', 'WEEKENDS', 'ACTIVE', 'Medical background with rural healthcare experience', NOW(), NOW()),
('Meera Patel', 'meera.patel@email.com', '+91-9876543212', 'Digital Marketing, Social Media, Graphic Design', 'FLEXIBLE', 'PENDING', 'Creative professional with marketing expertise', NOW(), NOW()),
('Arjun Singh', 'arjun.singh@email.com', '+91-9876543213', 'Project Management, Event Organization, Leadership', 'EVENINGS', 'ACTIVE', 'Strong leadership and organizational skills', NOW(), NOW());

-- Insert volunteer interests
INSERT INTO volunteer_interests (volunteer_id, interest) VALUES
(1, 'EDUCATION'),
(1, 'WOMEN_EMPOWERMENT'),
(2, 'HEALTHCARE'),
(2, 'COMMUNITY_DEVELOPMENT'),
(3, 'EDUCATION'),
(3, 'WOMEN_EMPOWERMENT'),
(4, 'COMMUNITY_DEVELOPMENT'),
(4, 'EDUCATION');

-- Insert sample donations
INSERT INTO donations (donor_name, donor_email, donor_phone, amount, type, status, payment_method, transaction_id, program_id, message, is_anonymous, created_at, updated_at) VALUES
('Anonymous Donor', 'donor1@email.com', NULL, 5000.00, 'ONE_TIME', 'COMPLETED', 'UPI', 'TXN001', 1, 'Keep up the great work!', true, NOW(), NOW()),
('Amit Gupta', 'amit.gupta@email.com', '+91-9876543220', 10000.00, 'MONTHLY', 'COMPLETED', 'Credit Card', 'TXN002', 2, 'Happy to support healthcare initiatives', false, NOW(), NOW()),
('Sunita Reddy', 'sunita.reddy@email.com', '+91-9876543221', 7500.00, 'ONE_TIME', 'COMPLETED', 'Net Banking', 'TXN003', 4, 'Supporting women empowerment', false, NOW(), NOW()),
('Corporate Donor', 'corporate@company.com', NULL, 25000.00, 'QUARTERLY', 'COMPLETED', 'Bank Transfer', 'TXN004', 3, 'Corporate social responsibility initiative', false, NOW(), NOW());