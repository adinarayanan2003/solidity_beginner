require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("hardhat-gas-reporter")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


const RINKEBY_RPC_URL =
  process.env.rpc_url  ||
  "url here"
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "priv key here"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "api here"
const COINMARKETCAP_API_KEY = process.env.coinmapi
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    //token : "nativetoken", ->to check gas rate in a specific chain
  },
}
