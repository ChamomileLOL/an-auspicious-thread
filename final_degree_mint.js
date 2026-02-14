require('dotenv').config();
const { Web3 } = require('web3');
const meritAbi = require('./abi/MeritToken.json');

// THE SEPOLIA CONNECTION
const web3 = new Web3(process.env.SEPOLIA_RPC_URL); 
const contractAddress = "0xC2b503463CAe48279351044B928F60023B0b0196";
const accountAddress = "0xEcb81DE5711b46eb3cc28afA2ad6e6fd31114988";
const privateKey = process.env.PRIVATE_KEY; 

const contract = new web3.eth.Contract(meritAbi, contractAddress);

async function mintDegree() {
    console.log("--- INITIATING ON-CHAIN DEGREE MINTING ---");
    
    // Encoding the function call for the smart contract
    const data = contract.methods.mintDegree(accountAddress, "BACHELOR OF TECHNOLOGY").encodeABI();
    
    const tx = {
        from: accountAddress,
        to: contractAddress,
        gas: 500000,
        data: data
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    
    console.log('[SUCCESS]: Degree Tokenized on Sepolia!');
    console.log(`[TRANSACTION HASH]: ${receipt.transactionHash}`);
    console.log(`[VERIFY ON ETHERSCAN]: https://sepolia.etherscan.io/tx/${receipt.transactionHash}`);
}

mintDegree().catch(console.error);