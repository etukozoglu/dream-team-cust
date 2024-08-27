### **Data (PostgreSQL) README**

# Dream Team - PostgreSQL Database Setup

## Project Overview
This project involves setting up the PostgreSQL database for the "Dream Team" initiative, which stores customer account request information. The database is used by the backend service to persist data collected from the frontend form.

## Features
- Storage of customer account request details.
- Support for different company sizes and developer counts.
- Secure storage of customer information including emails and phone numbers.

## Table Schema
The main table used for storing customer information is `customer_requests`. Below is the schema:

| Column Name          | Data Type     | Description                              |
|----------------------|---------------|------------------------------------------|
| `id`                 | SERIAL        | Primary key, auto-incremented ID         |
| `first_name`         | VARCHAR(255)  | Customer's first name                    |
| `last_name`          | VARCHAR(255)  | Customer's last name                     |
| `company_name`       | VARCHAR(255)  | Name of the company                      |
| `company_size`       | VARCHAR(50)   | Company size (<10, <50, <250, >=250 ) |
| `email`              | VARCHAR(255)  | Customer's email address                 |
| `phone_number`       | VARCHAR(20)   | Customer's phone number                  |
| `number_of_developers` | VARCHAR(50) | Number of developers (<10, <50, <250, >=250) |
| `role`               | VARCHAR(255)  | Customer's role in the company           |
| `message`            | TEXT          | Free text message from the customer      |

## Setup Instructions

1. **Install PostgreSQL**:
   - Download and install PostgreSQL from [here](https://www.postgresql.org/download/).

2. **Create the Database**:
   - Open the PostgreSQL command line or use a tool like pgAdmin, and create a new database:
     ```sql
     CREATE DATABASE dreamteamdb;
     ```

3. **Connect to the Database**:
   - Connect to the newly created database:
     ```bash
     psql -U your-username -d dreamteamdb
     ```

4. **Create the Table**:
   - Run the following SQL script to create the `customer_requests` table:
     ```sql
     CREATE TABLE customer_requests (
         id SERIAL PRIMARY KEY,
         first_name VARCHAR(255),
         last_name VARCHAR(255),
         company_name VARCHAR(255),
         company_size VARCHAR(50),
         email VARCHAR(255),
         phone_number VARCHAR(20),
         number_of_developers VARCHAR(50),
         role VARCHAR(255),
         message TEXT
     );

## Database Connection
Ensure that the backend application can connect to this database by configuring the connection details in the backend's `application.properties` file.
