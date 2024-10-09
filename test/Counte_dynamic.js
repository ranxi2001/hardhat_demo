const { ethers } = require("hardhat");
const { expect } = require("chai");

let counter;

describe("Counter1", function () {  // 更改描述以区分不同的测试
  async function init() {
    const [owner, otherAccount] = await ethers.getSigners();
    // 使用完全限定名来指定合约
    const Counter = await ethers.getContractFactory("contracts/counter_dynamic.sol:Counter");
    counter = await Counter.deploy(5);
    await counter.waitForDeployment();
    console.log("counter:" + await counter.getAddress());
  }

  before(async function () {
    await init();
  });

  it("初始值应该等于5", async function () {
    expect(await counter.counter()).to.equal(5);
  });

  it("调用count()后，计数器应该增加1", async function () {
    let tx = await counter.count();
    await tx.wait();
    expect(await counter.counter()).to.equal(6);
  });

  it("再次调用count()，计数器应该再次增加1", async function () {
    let tx = await counter.count();
    await tx.wait();
    expect(await counter.counter()).to.equal(7);
  });
});
