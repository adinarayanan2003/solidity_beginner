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
const Rpc_url = process.env.rpc_url || ""
const priv_key = process.env.priv_key || ""
const etherscankey = process.env.etherscanapi || ""

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
