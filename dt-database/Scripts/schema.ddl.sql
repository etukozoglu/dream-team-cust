DROP TABLE IF EXISTS t_customers;
DROP TABLE IF EXISTS t_company_sizes;
DROP TABLE IF EXISTS t_team_sizes;

CREATE TABLE t_company_sizes (
    company_size_id SERIAL,
    company_size_range VARCHAR(50) NOT NULL,
    CONSTRAINT t_company_sizes_pkey PRIMARY KEY (company_size_id)
);

CREATE TABLE t_team_sizes (
    team_size_id SERIAL,
    team_size_range VARCHAR(50) NOT NULL,
    CONSTRAINT t_team_sizes_pkey PRIMARY KEY (team_size_id)
);

CREATE TABLE t_customers (
    request_number INT GENERATED ALWAYS AS IDENTITY,
    customer_firstname VARCHAR(200) NOT NULL,
    customer_lastname VARCHAR(200) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone_number VARCHAR(25) NOT NULL,
    customer_role VARCHAR(50), 
    customer_company_name VARCHAR(200) NOT NULL,
    customer_message VARCHAR(2000) NOT NULL,
    team_size_id INT NOT NULL,
    company_size_id INT NOT NULL,
    CONSTRAINT t_customers_pkey PRIMARY KEY (request_number),
    CONSTRAINT t_customers_t_team_sizes_fkey FOREIGN KEY (team_size_id) 
		REFERENCES t_team_sizes(team_size_id),
	CONSTRAINT t_customers_t_company_sizes_fkey FOREIGN KEY (company_size_id) 
		REFERENCES t_company_sizes(company_size_id)
);
