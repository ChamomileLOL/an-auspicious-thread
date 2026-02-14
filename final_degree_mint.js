require('dotenv').config();
const { Web3 } = require('web3');
const meritAbi = require('./abi/MeritToken.json');

// THE SEPOLIA CONNECTION - Initializing 'web3' (lowercase)
const web3 = new Web3(process.env.SEPOLIA_RPC_URL); 
const contractAddress = "0xC2b503463CAe48279351044B928F60023B0b0196";
const accountAddress = "0xEcb81DE5711b46eb3cc28afA2ad6e6fd31114988";
const privateKey = process.env.PRIVATE_KEY; 

const contract = new web3.eth.Contract(meritAbi, contractAddress);

async function mintDegree() {
    console.log("--- INITIATING ON-CHAIN DEGREE MINTING ---");
    
    // Fetching the current gas price to prevent MissingGasError
    const gasPrice = await web3.eth.getGasPrice();
    
    const data = contract.methods.mintDegree(accountAddress, "BACHELOR OF TECHNOLOGY").encodeABI();
    
    const tx = {
        from: accountAddress,
        to: contractAddress,
        gas: 500000,
        gasPrice: gasPrice,
        data: data,
        type: '0x0' 
    };

    console.log("Signing transaction...");
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    
    console.log("Broadcasting to Sepolia...");
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    
    console.log('[SUCCESS]: Degree Tokenized on Sepolia!');
    console.log(`[TRANSACTION HASH]: ${receipt.transactionHash}`);
    console.log(`[VERIFY ON ETHERSCAN]: https://sepolia.etherscan.io/tx/${receipt.transactionHash}`);
}

// Ensure the function call is at the very bottom
mintDegree().catch(console.error);