DROP TABLE IF EXISTS t_customers;

CREATE TABLE t_customers(
   customer_id INT GENERATED ALWAYS AS IDENTITY,
   company_name VARCHAR(200) NOT NULL,
   company_size VARCHAR(20) NOT NULL,
   num_of_dev VARCHAR(20) NOT NULL,
   customer_firstname VARCHAR(200) NOT NULL,
   customer_lastname VARCHAR(200) NOT NULL,
   customer_email VARCHAR(200) NOT NULL,
   customer_phone_number VARCHAR(50) NOT NULL,
   customer_role VARCHAR(50),
   customer_message VARCHAR(2000) NOT NULL,
   CONSTRAINT t_spots_pkey PRIMARY KEY (customer_id)
);