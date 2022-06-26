require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const Rpc_url = process.env.rpc_url || "https://eth-rinkeby.alchemyapi.io/v2/WyhgTk5Wt6CuYBWZ4WPKj2cBePX8cUHX"
const priv_key = process.env.priv_key || "0x33606e7e2704f353f9bcd7e4cc83c2a6ec5e75ce88b723d58b929f741f4349d8"
const etherscankey = process.env.etherscanapi || "V7C9DKHCGN8KBNB17W858TQMM34ZN397W1"

module.exports = {
  defaultNetwork : "hardhat",
  networks : {
      rinkeby : {
        url : Rpc_url,
        accounts : [priv_key],
        chainId : 4,
      },
  },
  solidity: "0.8.7",
  // etherscan : {
  //   apiKey : etherscankey,

  // }
};
