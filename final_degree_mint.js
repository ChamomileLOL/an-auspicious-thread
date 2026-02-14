async function mintDegree() {
    console.log("--- INITIATING ON-CHAIN DEGREE MINTING ---");
    
    // Get current gas price from the network
    const gasPrice = await web3.eth.getGasPrice();
    
    const data = contract.methods.mintDegree(accountAddress, "BACHELOR OF TECHNOLOGY").encodeABI();
    
    const tx = {
        from: accountAddress,
        to: contractAddress,
        gas: 500000,
        gasPrice: gasPrice, // Added gasPrice to fix MissingGasError
        data: data,
        type: '0x0' // Specifies a legacy transaction type to simplify parameters
    };

    console.log("Signing transaction...");
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    
    console.log("Broadcasting to Sepolia...");
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    
    console.log('[SUCCESS]: Degree Tokenized on Sepolia!');
    console.log(`[TRANSACTION HASH]: ${receipt.transactionHash}`);
    console.log(`[VERIFY ON ETHERSCAN]: https://sepolia.etherscan.io/tx/${receipt.transactionHash}`);
}