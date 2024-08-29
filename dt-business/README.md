# Dream Team - Client Account Request API (Backend)

## Project Overview
This project is the backend service for the "Dream Team" initiative, which handles the submission of account creation requests from potential customers. The backend is built using Spring Boot and Java, and it connects to a PostgreSQL database to store customer information.

## Features
- RESTful API endpoints to handle account creation requests.
- Validation and processing of incoming request data.
- Integration with a PostgreSQL database for persistent storage.

## Technologies Used
- **Spring Boot**: A Java-based framework used to create standalone, production-grade Spring applications.
- **Java**: The programming language used to develop the backend logic.
- **PostgreSQL**: The relational database management system used for data storage.
- **Hibernate**: For Object-Relational Mapping (ORM) with the database.
- **Maven**: For project build and dependency management.


## Project Setup
To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git@github.com:etukozoglu/dream-team-cust.git
   ```

2. **Navigate to the project directory:**
 ```bash cd dream-team-cust/dream-team-business```

**API Endpoints**
<br>
POST /api/v1/accounts/request<br>
Accepts a JSON payload with the following fields:<br>
firstName<br>
lastName<br>
companyName<br>
companySize<br>
email<br>
phoneNumber<br>
numberOfDevelopers<br>
role<br>
message<br>

Validates the input and stores it in the PostgreSQL database.<br>

