require('dotenv').config();
const { Web3 } = require('web3');
const web3 = new Web3(process.env.SEPOLIA_RPC_URL);

async function check() {
    const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    const balance = await web3.eth.getBalance(account.address);
    console.log("--- SYSTEM DIAGNOSTIC ---");
    console.log("Wallet Address derived from Private Key:", account.address);
    console.log("Balance on Network:", web3.utils.fromWei(balance, 'ether'), "ETH");
    console.log("RPC URL:", process.env.SEPOLIA_RPC_URL);
}
check();