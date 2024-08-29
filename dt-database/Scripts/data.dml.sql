-- Insertion des tailles de compagnies
INSERT INTO t_company_sizes (company_size_range) VALUES 
('LESS_THAN_1000'), 
('FROM_1000_TO_10000'), 
('MORE_THAN_10000');

-- Insertion des tailles d'équipes
INSERT INTO t_team_sizes (team_size_range) VALUES 
('LESS_THAN_200'), 
('FROM_200_TO_1000'), 
('MORE_THAN_1000');

-- Insertion de quatre enregistrements dans la table t_customers
INSERT INTO t_customers (
    customer_firstname, customer_lastname, customer_email, 
    customer_phone_number, customer_company_name, customer_role, 
    customer_message, team_size_id, company_size_id
) VALUES
('John', 'Doe', 'john.doe@example.com', '555-1234', 'Acme Corp', 'Manager', 
 'Looking for a new CRM solution.'),
('Jane', 'Smith', 'jane.smith@example.com', '555-5678', 'Tech Innovators', 'CEO', 
 'Interested in a demo.'),
('Alice', 'Brown', 'alice.brown@example.com', '555-8765', 'Brown Enterprises', 'CTO', 
 'We need a scalable cloud solution.')
 ('Fabien', 'Astia', 'alice.brown@example.com', '555-8765', 'Brown Enterprises', 'CTO', 
 'We need a scalable cloud solution.');
 
SELECT * FROM t_team_sizes;
SELECT * FROM t_company_sizes;
SELECT * FROM t_customers;
