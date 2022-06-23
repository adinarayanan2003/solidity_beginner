const ethers = require("ethers");
const fs = require("fs-extra")
require("dotenv").config();

async function main() {
    console.log(process.env.priv_key)
    console.log(process.env.priv_key_pass)
    const wallet = new ethers.Wallet(process.env.priv_key)
    const encryptedJsonKey = await wallet.encrypt(
        process.env.priv_key_pass,
        process.env.priv_key
    )
    console.log(encryptedJsonKey)
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })