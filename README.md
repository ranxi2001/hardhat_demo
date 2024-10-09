# Hardhat Counter 项目

这个项目展示了一个基本的 Hardhat 使用案例。它包含两个简单的计数器智能合约、对应的测试文件，以及一个用于部署合约的 Hardhat Ignition 模块。

本项目对应的**教程**可见：[从零开始创建一个Hardhat项目](https://github.com/ranxi2001/OnePolloWeb3/blob/master/smart%20contract/Hardhat%E5%AE%9E%E6%88%98%E7%AF%87%E2%80%94%E2%80%94%E4%BB%8E%E9%9B%B6%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE.md)

## 项目结构

- `contracts/`: 包含智能合约文件
  - `counter_static.sol`: 基本计数器合约
  - `counter_dynamic.sol`: 带参数构造函数的计数器合约
- `test/`: 包含测试文件
  - `Counter_static.js`: 测试 counter_static.sol
  - `Counte_dynamic.js`: 测试 counter_dynamic.sol
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

