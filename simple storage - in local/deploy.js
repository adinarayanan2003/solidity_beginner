const ethers = require("ethers");
const fs = require("fs-extra")
require("dotenv").config();


async function main(){
    const provider= new ethers.providers.JsonRpcProvider(process.env.rpc_url);
     const wallet = new ethers.Wallet(process.env.priv_key,provider);

    // const encryptedpk = fs.readFileSync("./.encryptedKey.json","utf8");
    // let wallet = new ethers.Wallet.fromEncryptedJsonSync(encryptedpk,process.env.priv_key_pass);
    // wallet = await wallet.connect(provider);


    const abi = fs.readFileSync("./Simplestorage_sol_simplestorage.abi","utf8");
    const binary = fs.readFileSync("./Simplestorage_sol_simplestorage.bin","utf8");

    const contractFactory = new ethers.ContractFactory(abi,binary,wallet);

    console.log("deploying");
    // await makes sure deploying is completed
    
    const contract = await contractFactory.deploy();
    // number of blocks to wait
    await contract.deployTransaction.wait(1);

    console.log(`contract address -> ${contract.address}`);
    let favnum = await contract.retrieve();
    console.log(`Favourite number = ${favnum.toString()}`);
    //ether js understand 7 in number not string
    const transacresponse = await contract.store("7");
    const transreceipt = await transacresponse.wait(1);
    favnum = await contract.retrieve();
    console.log(`Favourite number now  = ${favnum.toString()}`);
    //const transactionreceipt = await contract.deployTransaction.wait(1);
    // transaction response in contract.deployTransaction without waiting
    //console.log(transactionreceipt);
    // const nonce= await wallet.getTransactionCount();
    // const tx= {
    //     // nonce modified to not be edited each time
    //     nonce : nonce,
    //     gasPrice: 20000000,
    //     gasLimit: 1000000,
    //     to: null,
    //     value: 0, // data is the binary code
    //     data : "0x608060405234801561001057600080fd5b50610771806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631c4e86c41461005c5780632e64cec11461008d5780636057361d146100ab5780638bab8dd5146100c7578063e1b3202a146100f7575b600080fd5b6100766004803603810190610071919061046d565b610113565b604051610084929190610545565b60405180910390f35b6100956101cf565b6040516100a2919061052a565b60405180910390f35b6100c560048036038101906100c0919061046d565b6101d8565b005b6100e160048036038101906100dc91906103c8565b6101e2565b6040516100ee919061052a565b60405180910390f35b610111600480360381019061010c9190610411565b610210565b005b6001818154811061012357600080fd5b906000526020600020906002020160009150905080600001549080600101805461014c9061063e565b80601f01602080910402602001604051908101604052809291908181526020018280546101789061063e565b80156101c55780601f1061019a576101008083540402835291602001916101c5565b820191906000526020600020905b8154815290600101906020018083116101a857829003601f168201915b5050505050905082565b60008054905090565b8060008190555050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600160405180604001604052808381526020018481525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190805190602001906102769291906102a0565b5050508060028360405161028a9190610513565b9081526020016040518091039020819055505050565b8280546102ac9061063e565b90600052602060002090601f0160209004810192826102ce5760008555610315565b82601f106102e757805160ff1916838001178555610315565b82800160010185558215610315579182015b828111156103145782518255916020019190600101906102f9565b5b5090506103229190610326565b5090565b5b8082111561033f576000816000905550600101610327565b5090565b60006103566103518461059a565b610575565b90508281526020810184848401111561037257610371610704565b5b61037d8482856105fc565b509392505050565b600082601f83011261039a576103996106ff565b5b81356103aa848260208601610343565b91505092915050565b6000813590506103c281610724565b92915050565b6000602082840312156103de576103dd61070e565b5b600082013567ffffffffffffffff8111156103fc576103fb610709565b5b61040884828501610385565b91505092915050565b600080604083850312156104285761042761070e565b5b600083013567ffffffffffffffff81111561044657610445610709565b5b61045285828601610385565b9250506020610463858286016103b3565b9150509250929050565b6000602082840312156104835761048261070e565b5b6000610491848285016103b3565b91505092915050565b60006104a5826105cb565b6104af81856105d6565b93506104bf81856020860161060b565b6104c881610713565b840191505092915050565b60006104de826105cb565b6104e881856105e7565b93506104f881856020860161060b565b80840191505092915050565b61050d816105f2565b82525050565b600061051f82846104d3565b915081905092915050565b600060208201905061053f6000830184610504565b92915050565b600060408201905061055a6000830185610504565b818103602083015261056c818461049a565b90509392505050565b600061057f610590565b905061058b8282610670565b919050565b6000604051905090565b600067ffffffffffffffff8211156105b5576105b46106d0565b5b6105be82610713565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b8381101561062957808201518184015260208101905061060e565b83811115610638576000848401525b50505050565b6000600282049050600182168061065657607f821691505b6020821081141561066a576106696106a1565b5b50919050565b61067982610713565b810181811067ffffffffffffffff82111715610698576106976106d0565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61072d816105f2565b811461073857600080fd5b5056fea26469706673582212202cb2036233f0de34114e148f82df46252bb0cedf2e89ea0e07dbd1736a9f0f0964736f6c63430008070033",
    //     chainId : 1337,
    // };

    // send transaction includes sign transaction inside it
    // const sendreceipt = await wallet.sendTransaction(tx);
    // await sendreceipt.wait(1);
    // console.log(sendreceipt);

}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })