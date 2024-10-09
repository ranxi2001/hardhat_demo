# Hardhat Counter Project

This project demonstrates a basic Hardhat use case. It includes two simple counter smart contracts (static and dynamic versions), corresponding test files, and a Hardhat Ignition module for contract deployment.

## Project Structure

- `contracts/`: Contains smart contract files
    - `counter_static.sol`: Basic counter contract (static version)
    - `counter_dynamic.sol`: Counter contract with parameterized constructor (dynamic version)
- `test/`: Contains test files
    - `Counter_static.js`: Tests for counter_static.sol
    - `Counter_dynamic.js`: Tests for counter_dynamic.sol
- `ignition/modules/`: Contains Hardhat Ignition deployment module

## Quick Start

1. Install dependencies:
   ```shell
   npm install
   ```

2. Run tests:
   ```shell
   npx hardhat test
   ```

3. Compile contracts:
   ```shell
   npx hardhat compile
   ```

4. Deploy contracts (using Hardhat Ignition):
   ```shell
   npx hardhat ignition deploy ./ignition/modules/Lock.js
   ```

## Further Improvements

1. Add more test cases to increase code coverage.
2. Use `REPORT_GAS=true npx hardhat test` to optimize contract gas usage.
3. Create custom deployment scripts for different networks.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the ISC License.