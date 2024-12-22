## BuyMeACoffe Smart Contract

### Overview

The `BuyMeACoffe` smart contract allows users to send tips (in the form of Ether) to a specified address along with a message. It includes the following features:

- **Buy Coffee**: Users can send a tip to another address with a custom message. The contract ensures that the tip amount is greater than zero.
- **Memo Storage**: Each purchase is stored in a `Memo` struct, which contains the sender, receiver, message, and tip amount.


### Deployment Script
A simple deployment script is included to deploy the contract to a local or test network using Hardhat. To deploy the contract, follow the instructions below.

### Testing
To test the contract, you can write tests using Hardhat's testing framework. Example test files can be found in the test directory.

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/JohnyVasamsetti/buy-me-a-coffe-hardhat
    cd buy-me-a-coffe-hardhat
   ```
2. Install the dependencies:

    ```bash
    npm install
    ```

3. Compile the smart contract

    ```bash
    npx hardhat compile
    ```