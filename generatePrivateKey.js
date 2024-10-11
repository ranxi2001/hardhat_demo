// 导入 `ethereumjs-wallet` 库，用于生成以太坊钱包
const Wallet = require('ethereumjs-wallet').default;

// 生成一个新的以太坊钱包对象
const wallet = Wallet.generate();

// 获取钱包的私钥并转换为十六进制格式
const privateKey = wallet.getPrivateKeyString();

// 获取钱包的公钥（地址）
const publicKey = wallet.getAddressString();

// 打印生成的私钥和公钥
console.log("生成的以太坊私钥:", privateKey);
console.log("生成的以太坊地址:", publicKey);