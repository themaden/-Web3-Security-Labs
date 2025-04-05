# Weak Authentication Lab

This lab demonstrates the risks of relying solely on wallet addresses for authentication in a Web3 application.

## Setup

1. Clone the repository.
2. Navigate to the `weak-authentication-lab` directory.
3. Ensure you have a smart contract deployed that has an `authenticate` method.

## Vulnerable Code

- The `authenticate` function checks the wallet address without additional verification.

## Secure Version

- Implement multi-factor authentication (MFA) to enhance security.
