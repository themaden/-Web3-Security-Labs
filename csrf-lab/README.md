# CSRF Lab

This lab demonstrates a Cross-Site Request Forgery (CSRF) vulnerability in a Node.js application.

## Setup

1. Clone the repository.
2. Navigate to the `csrf-lab` directory.
3. Install the dependencies:
   ```bash
   npm install express body-parser
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## Vulnerable Endpoint

- **Endpoint**: `/transfer`
- **Method**: POST
- **Payload**:
  ```html
  <form action="http://localhost:3002/transfer" method="POST">
    <input type="hidden" name="amount" value="1000">
    <input type="submit" value="Transfer">
  </form>
  ```

## Secure Version

- Implement CSRF tokens to protect against CSRF attacks.
