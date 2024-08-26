# Simplon_Weather Project README

## Table of Contents
- [Project Overview](#project-overview)
  - [Project Context](#project-context)
  - [Objective](#objective)
  - [Data Source](#data-source)
- [Using .gitignore to Exclude Files](#using-gitignore-to-exclude-files)
- [Project Visuals](#project-visuals)
  - [DBeaver Project Screenshots](#dbeaver-project-screenshots)
- [Data Dictionary](#data-dictionary)
  - [Table Dictionary for `t_weather_stations`](#table-dictionary-for-t_weather_stations)
  - [Table Dictionary for `t_weather_reports`](#table-dictionary-for-t_weather_reports)
- [Key Database Concepts](#key-database-concepts)
  - [Relational Database](#relational-database)
  - [Schema](#schema)
  - [Tables and Columns](#tables-and-columns)
  - [Primary Key and Foreign Key](#primary-key-and-foreign-key)
- [MERISE Methodology](#merise-methodology)
  - [Conceptual Data Model (MCD)](#conceptual-data-model)
  - [Relational Logical Data Model (MLD-R)](#relational-logical-data-model)
  - [Physical Data Model (MPD)](#physical-data-model)
- [Data Definition Language (DDL)](#ddl)

<br>

### Project Overview

### Project Context

The provided resources and documentation are designed to give you a clear overview of the project’s structure and operations, making your integration into the project smooth and straightforward. 

#### Objective

This project aims to develop a robust SQL database to manage and analyze meteorological data from Météo France. The main goal is to convert a **'denormalized'** meteorological database into a normalized format.

#### Data Source

First of all, I analyzed the imported data in CSV to extract the information requested by our instructor, Professor Frank Marshall. Data for this project was sourced from the site Météo France ⇒ https://meteo.data.gouv.fr/datasets/6569b3d7d193b4daf2b43edc. These datasets include detailed historical and current weather measurements across various locations in France between 1950 and 2022.

**Using .gitignore to Exclude Files**

I used a `.gitignore` file in my setup to exclude CSV files from the repository. `.gitignore` ensures that all files with the .csv extension are not tracked by Git, helping to keep our repository clean and focused on source code and essential assets.

#### DBeaver Project Screenshots

I include a screenshot in below from DBeaver, which illustrates how the database is organized within the SQL client. This visual guide helps in understanding the layout and connections of the tables and views within the database.

![image](https://github.com/etukozoglu/simplon_weather/assets/131680938/60a3a7e6-d625-466c-9a11-355f3eb7b85e)


## Data Dictionary

A data dictionary is a centralized repository of information about data such as meaning, relationships to other data, origin, usage, and format. It serves as a guide to understanding the structure of the database.

Here is our table dictionary for your better understanding: 

### Table Dictionary

### Table Dictionary for `t_weather_stations`

| Attributes       | Description                          | Generic Type | Size/Precision | Mandatory |
|------------------|--------------------------------------|--------------|----------------|-----------|
| station_number   | Météo-France station number          | CHAR         | CHAR(8)        | Yes       |
| usual_name       | Usual name of the station            | VARCHAR      | VARCHAR(25)    | Yes       |

### Table Dictionary for `t_weather_reports`

| Attributes       | Description                                           | Generic Type | Size/Precision  | Mandatory |
|------------------|-------------------------------------------------------|--------------|-----------------|-----------|
| station_number   | Météo-France station number                           | CHAR         | CHAR(8)         | Yes       |
| report_date      | Date of the report in format YYYYMM                   | DATE         | -               | Yes       |
| pre_acc          | Monthly cumulative precipitation (in mm and tenths)   | NUMERIC      | NUMERIC(4,1)    | No        |
| pre_max_24h      | Maximum precipitation fallen in 24 hours during the month | NUMERIC    | NUMERIC(4,1)    | No        |
| pre_max_24h_day  | Day of the month with maximum precipitation in 24 hours | SMALLINT    | Max 2 digits (0-31)               | No        |
| temp_avg_max     | Monthly average of maximum daily temperatures (in °C and tenths) | NUMERIC | NUMERIC(3,1)    | No        |
| temp_max         | Monthly absolute maximum of daily temperatures (in °C and tenths) | NUMERIC | NUMERIC(3,1)    | No        |
| temp_max_day     | Day of the month with the absolute maximum temperature | SMALLINT    | Max 2 digits (0-31)               | No        |
| temp_avg_min     | Monthly average of minimum daily temperatures (in °C and tenths) | NUMERIC | NUMERIC(3,1)    | No        |
| temp_min         | Monthly absolute minimum of daily temperature (in °C and tenths) | NUMERIC | NUMERIC(3,1)    | No        |
| temp_min_day     | Day of the month with the absolute minimum temperature | SMALLINT    | Max 2 digits (0-31)            | No        |



## Project's Key Database Concepts

### Relational Database
A Relational Database is a type of database that stores and provides access to data points that are related to one another. These databases are structured to recognize relations among stored tables of information.

### Schema
A Schema defines the structure and organization of data, which includes the tables, fields, relationships, views, indexes, etc. It acts as a plan for how the database is constructed.

### Tables and Columns

**Table:** In a relational database, a table organizes data in rows and columns, typically storing one type of entity in each table.
**Column:** A column in a database table is a vertical entity that contains all information associated with a specific attribute of an entity.

#### Primary Key and Foreign Key

**Primary key:** A primary key is a specific selection of one or more attributes that uniquely identifies each tuple/row in a relation. It must be unique and cannot contain NULL values.
**Foreign key:** A foreign key is a set of one or more columns in a table that uniquely references the primary key columns of another table. This linkage between tables ensures the integrity of data across them.


### MERISE Methodology

MERISE is a data modeling methodology used in system design and database management, including:

#### Conceptual Data Model

Conceptual Data Model that outlines the structure of the information systems without any technical considerations.

#### Relational Logical Data Model

Logical Data Model for Relational Databases, derived from Conceptual Data Model, focusing on the organization of data within the database.

#### Physical Data Model

Physical Data Model that describes the implementation of the model on a specific database management system.

#### DDL

DDL (Data Definition Language) refers to the subset of SQL commands used to define the database structure or schema, and manage objects within the database. Commands such as CREATE, ALTER, and DROP are part of DDL. In our project, you find our DDL as in the image below:

![image](https://github.com/etukozoglu/simplon_weather/assets/131680938/df90efc3-2a15-413d-9167-e2c23f94b5f4)
