# Shorty URL Project

This project is a simple URL shortener application that converts long URLs into short, easy-to-share URLs. It is built using **Spring Boot** for the backend and **PostgreSQL** for persistent storage. The project is deployed online and available for testing and production use.

## Features

* Convert long URLs into short, shareable URLs.
* Retrieve the original URL using the short URL identifier.
* Built with a robust backend using Spring Boot and PostgreSQL.
* Deployed online for real-world usage.

## Technologies Used
* ***Backend Framework:*** Spring Boot
* ***Database:*** PostgreSQL
* ***Build Tool:*** Maven
* ***Programming Language:*** Java 21

## Endpoints
### 1. Shorten a URL (POST request)
**Endpoint:** ``/url``
**Description:** Converts a long URL into a shortened URL.
**Request Example:**

```http
POST /url
Content-Type: application/json

{
    "url": "https://www.example.com/some/very/long/url"
}
```
**Response Example:**

```json
{
    "shortUrl": "https://short.url/abc123"
}
```

### 2. Retrieve Original URL (GET request)

**Endpoint:** ``/url/{value}``

**Description:** Retrieves the original long URL using the short URL identifier (value).

**Request Example:**

```http

GET /url/abc123
```
**Response Example:**

```json
{
    "longUrl": "https://www.example.com/some/very/long/url"
}
```

## Setup Instructions

### Prerequisites
* **Java 17** or higher
* **Maven**
* **PostgreSQL Database**
  
### Steps to Run Locally
**1. Clone the Repository:**
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```
**2. Database Setup:**

  * Install and start PostgreSQL.
  * Create a new database:

```sql
Copy code
CREATE DATABASE urldb;
```

* Update the database credentials in the `application.properties` file:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/urldb
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
**3. Build and Run the Application:**

  * Build the project:
```bash
./mvnw clean package
```
  * Start the Spring Boot application:
```bash
java -jar target/urlShortner-0.0.1-SNAPSHOT.jar
```
  * The application will be available at http://localhost:8080.

**4. Interact with the API:**

  * Use tools like Postman, curl, or your browser to interact with the API endpoints.


## Live Application
The project is deployed and accessible at:
Deployed URL: https://shorty-ovitwijcb-invictus04s-projects.vercel.app/

