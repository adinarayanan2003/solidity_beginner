const { ethers, run, network } = require("hardhat")


async function main(){
  const contractfact = await ethers.getContractFactory("simplestorage")
  console.log("Deploying contract...")
  const simpleStorage = await contractfact.deploy()
  await simpleStorage.deployed()
  console.log(`Deployed contract to: ${simpleStorage.address}`)

}

async function verify(){


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });