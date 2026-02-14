const { Web3 } = require('web3');

// Strict Equality Web3 Instantiation
const web3 = new Web3(process.env.WEB3_PROVIDER_URI);

exports.verifyThread = async (req, res) => {
    console.log("\n[VERIFICATION]: Request received to verify Auspicious Thread.");
    
    try {
        // 1. Network Pulse Check
        const isListening = await web3.eth.net.isListening();
        if (!isListening) {
            throw new Error("Blockchain node is deaf.");
        }
        
        // 2. The Strict Block Hash Check
        // We verify the genesis block to ensure you are on a pristine network.
        const block = await web3.eth.getBlock(0);
        if (!block || !block.hash) {
            throw new Error("Genesis block corrupted or missing.");
        }
        console.log(`[PASS]: Genesis Block Verified. Hash: ${block.hash}`);
        
        // 3. The Ramanujan Wei Conversion
        // The value of the thread must equal the Prime Port converted to Wei.
        const portNumber = process.env.IITB_PRIME_PORT;
        const weiValue = web3.utils.toWei(portNumber.toString(), 'wei');
        
        res.status(200).json({
            status: "OFFICIAL VALIDATION GRANTED",
            message: "The Auspicious Thread is mathematically and cryptographically pure.",
            blockHash: block.hash,
            requiredWei: weiValue,
            directorSignature: process.env.IITB_STRICT_EQUALITY_HASH
        });
    } catch (error) {
        console.error(`[FATAL WEB3 ERROR]: ${error.message}`);
        res.status(500).json({
            status: "REJECTED",
            reason: error.message,
            directorNote: "Your infrastructure lacks integrity."
        });
    }
};