# Hardhat Counter 项目

这个项目展示了一个基本的 Hardhat 使用案例。它包含两个简单的计数器智能合约、对应的测试文件，以及一个用于部署合约的 Hardhat Ignition 模块。

## 项目结构

- `contracts/`: 包含智能合约文件
  - `counter.sol`: 基本计数器合约
  - `counter1.sol`: 带参数构造函数的计数器合约
- `test/`: 包含测试文件
  - `Counter.js`: 测试 counter.sol
  - `Counter1.js`: 测试 counter1.sol
- `ignition/modules/`: 包含 Hardhat Ignition 部署模块

## 快速开始

1. 安装依赖：
   ```shell
   npm install
   ```

2. 运行测试：
   ```shell
   npx hardhat test
   ```

3. 编译合约：
   ```shell
   npx hardhat compile
   ```

4. 部署合约（使用 Hardhat Ignition）：
   ```shell
   npx hardhat ignition deploy ./ignition/modules/Lock.js
   ```

## 进一步改进

1. 添加更多测试用例以提高代码覆盖率。
2. 使用 `REPORT_GAS=true npx hardhat test` 来优化合约的 gas 使用。
3. 创建自定义的部署脚本，以便将合约部署到不同的网络。

## 贡献

欢迎提交 Pull Requests。对于重大更改，请先开 issue 讨论您想要改变的内容。

## 许可证

此项目采用 ISC 许可证.


