### **Data (PostgreSQL) README**

# Dream Team - PostgreSQL Database Setup

## Project Overview
This part involves setting up the PostgreSQL database for the "Dream Team" project, which stores customer request information. The database is used by the backend service to persist data collected from the frontend form.

## Features
- Storage of customer account request details.
- Support for different company sizes and developer counts.
- Secure storage of customer information including emails and phone numbers.

## Table Schema
The main table used for storing customer information is `customer_requests`. Below is the schema:

| Column Name          | Data Type     | Description                              |
|----------------------|---------------|------------------------------------------|
| `request_number`                 | SERIAL        | Primary key, auto-incremented ID         |
| `first_name`         | VARCHAR(100)  | Customer's first name                    |
| `last_name`          | VARCHAR(100)  | Customer's last name                     |
| `company_name`       | VARCHAR(200)  | Name of the company                      |
| `company_size`       | VARCHAR(50)   | Company size  |
| `email`              | VARCHAR(255)  | Customer's email address                 |
| `phone_number`       | VARCHAR(50)   | Customer's phone number                  |
| `number_of_developers` | VARCHAR(50) | Number of developers  |
| `role`               | VARCHAR(50)  | Customer's role in the company           |
| `message`            | VARCHAR(2000)          | Free text message from the customer      |

## Setup Instructions

1. **Install PostgreSQL**:
   - Download and install PostgreSQL from [here](https://www.postgresql.org/download/).

2. **Create the Database**:
   - Open the PostgreSQL command line or use a tool like pgAdmin, and create a new database:
     ```sql
     CREATE DATABASE dt_database;
     ```

3. **Connect to the Database**:
   - Connect to the newly created database:
     ```bash
     psql -U your-username -d dt_database
     ```

4. **Create the Table**:
   - Run the following SQL script to create the tables:
     ```sql
DROP TABLE IF EXISTS t_customers, t_company_sizes, t_team_sizes;


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

     );

## Database Connection
Ensure that the backend application can connect to this database by configuring the connection details in the backend's `application.properties` file.
