# SQL Injection Lab

This lab demonstrates a SQL injection vulnerability in a Node.js application using Express and SQLite.

## Setup

1. Clone the repository.
2. Navigate to the `sql-injection-lab` directory.
3. Install the dependencies:
   ```bash
   npm install express sqlite3 body-parser
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## Vulnerable Endpoint

- **Endpoint**: `/getUser`
- **Method**: POST
- **Payload**:
  ```json
  {
    "username": "admin' OR '1'='1"
  }
  ```

## Secure Version

- **Endpoint**: `/getUserSecure`
- This endpoint uses parameterized queries to prevent SQL injection.
