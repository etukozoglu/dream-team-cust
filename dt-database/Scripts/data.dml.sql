-- Insertion des tailles de compagnies
INSERT INTO t_company_sizes (company_size_range) VALUES ('Less than 1000');
INSERT INTO t_company_sizes (company_size_range) VALUES ('From 1000 to 10000');
INSERT INTO t_company_sizes (company_size_range) VALUES ('More than 10000');

-- Insertion des tailles d'équipes
INSERT INTO t_team_sizes (team_size_range) VALUES ('Less than 200');
INSERT INTO t_team_sizes (team_size_range) VALUES ('From 200 to 1000');
INSERT INTO t_team_sizes (team_size_range) VALUES ('More than 1000');

-- Insertion de quatre enregistrements dans la table t_customers
INSERT INTO t_customers (
    customer_firstname, customer_lastname, customer_email, 
    customer_phone_number, customer_company_name, customer_role, 
    customer_message, team_size_id, company_size_id
) VALUES
('John', 'Doe', 'john.doe@example.com', '555-1234', 'Acme Corp', 'Manager', 
 'Looking for a new CRM solution.', 1, 1),
('Jane', 'Smith', 'jane.smith@example.com', '555-5678', 'Tech Innovators', 'CEO', 
 'Interested in a demo.', 2, 2),
('Alice', 'Brown', 'alice.brown@example.com', '555-8765', 'Brown Enterprises', 'CTO', 
 'We need a scalable cloud solution.', 3, 3);