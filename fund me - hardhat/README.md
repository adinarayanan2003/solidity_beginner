//solhint usage

yarn solhint contracts/*.sol        
 
//to use chainlink contracts they have to be installed

yarn add --dev @chainlink/contracts 

//avoiding scripts/deploy.js 
yarn add --dev hardhat-deploy

// ethers remember each deployment by this overwriting
 yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
