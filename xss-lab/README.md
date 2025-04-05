# XSS Lab

This lab demonstrates a Cross-Site Scripting (XSS) vulnerability in a Node.js application.

## Setup

1. Clone the repository.
2. Navigate to the `xss-lab` directory.
3. Install the dependencies:
   ```bash
   npm install express body-parser
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## Vulnerable Endpoint

- **Endpoint**: `/submit`
- **Method**: POST
- **Payload**:
  ```html
  <script>alert('XSS Attack!');</script>
  ```

## Secure Version

- Sanitize user input to prevent XSS attacks.
