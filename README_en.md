# Hardhat Counter Project

This project demonstrates a basic Hardhat use case. It includes two simple counter smart contracts (static and dynamic versions), corresponding test files, and a Hardhat Ignition module for contract deployment.

The corresponding ***Tutorial*** for this project can be found at:

1. [Creating a Hardhat project from scratch](https://github.com/ranxi2001/OnePolloWeb3/blob/master/smart%20contract/Hardhat%E5%AE%9E%E6%88%98%E7%AF%87%E2%80%94%E2%80%94%E4%BB%8E%E9%9B%B6%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE.md) 
2. [Deploying the contract to the test network with Hardhat](https://github.com/ranxi2001/OnePolloWeb3/blob/master/smart_contract/Hardhat%E5%AE%9E%E6%88%98%E7%AF%87%E2%80%94%E2%80%94%E5%B0%86%E5%90%88%E7%BA%A6%E9%83%A8%E7%BD%B2%E5%88%B0%E6%B5%8B%E8%AF%95%E7%BD%91.md)

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