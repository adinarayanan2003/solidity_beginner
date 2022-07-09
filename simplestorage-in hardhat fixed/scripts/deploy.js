const { ethers, run, network } = require("hardhat");

async function main() {
  const contractfact = await ethers.getContractFactory("simplestorage");
  console.log("Deploying contract...");
  const simpleStorage = await contractfact.deploy();
  await simpleStorage.deployed();
  console.log(`Deployed contract to: ${simpleStorage.address}`);
  console.log("Check for network");
  console.log(network.config.chainId);
  console.log(process.env.ETHERSCAN_API_KEY);
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for the transactions to be mined...");
    await simpleStorage.deployTransaction.wait(6);
    console.log("Passing arguments to verify function...");
    await verify(simpleStorage.address, []);
  }
}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
