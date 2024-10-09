const { ethers } = require("hardhat");

async function main() {
    // 部署静态计数器
    const CounterStatic = await ethers.getContractFactory("contracts/counter_static.sol:Counter");
    const counterStatic = await CounterStatic.deploy();
    await counterStatic.waitForDeployment();

    console.log("CounterStatic address:", await counterStatic.getAddress());

    // 部署动态计数器
    const CounterDynamic = await ethers.getContractFactory("contracts/counter_dynamic.sol:Counter");
    const counterDynamic = await CounterDynamic.deploy(5); // 假设初始值为5
    await counterDynamic.waitForDeployment();

    console.log("CounterDynamic address:", await counterDynamic.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});