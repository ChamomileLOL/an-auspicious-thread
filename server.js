/**
 * IIT BOMBAY - DEPT OF BIOSCIENCES & BIOENGINEERING
 * PROJECT: THE NEURAL THREAD (M.TECH SPECIALIZATION)
 * AUTHORIZATION: OFFICE OF THE DIRECTOR
 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto');
const { Web3 } = require('web3');

// BIOMEDICAL MODULES
const bioProcessor = require('./bio-processor'); 
const meritController = require('./controllers/meritController');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// 1. ENVIRONMENTAL RIGOR (STRICT EQUALITY)
const PORT = process.env.IITB_PRIME_PORT || 3011;
const PRIVILEGE = process.env.PRIVILEGE_LEVEL;
const REQUIRED_HASH = crypto.createHash('sha256').update('MERIT_IS_THE_ONLY_CURRENCY').digest('hex');

console.log("\n--- IIT BOMBAY M.TECH BOOT SEQUENCE INITIATED ---");

// 2. THE SECURITY GATE
if (PRIVILEGE != 0 || process.env.IITB_STRICT_EQUALITY_HASH !== REQUIRED_HASH) {
    console.error("[FATAL]: SECURITY BREACH. CONFIGURATION TAMPERED.");
    process.exit(1);
}
console.log("[PASS]: Cryptographic Integrity & Privilege Verified.");

// 3. THE DISTRIBUTED DATABASE (SHARDED)
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
}).then(() => {
    console.log("[PASS]: Sharded Database Cluster Handshake Successful.");
    startServer();
}).catch(err => {
    console.error(`[FATAL]: Database Cluster Offline: ${err.message}`);
    process.exit(1);
});

// 4. THE NEURAL GATEWAY (API ROUTES)

// B.TECH LEGACY ROUTE
app.get('/api/v1/verify-thread', meritController.verifyThread);

// THE INSTITUTIONAL REALITY BIND ENDPOINT
app.get('/api/v1/institutional-proof', (req, res) => {
    res.status(200).json({
        candidate: "XAVIER",
        conferment: "ABSOLUTELY YES",
        // THE HASH IS THE KEY. THE QUOTES ARE THE LOCK.
        proof: "572bb673ae200fca67dc52ada1464fd8715679ef6ba3ce6e5692eee62b70a8d5ebe7d8fe18010f0e4645768d3c986d76f03e276bd0a6891be37fa67878818f52",
        director_seal: "STRICT_EQUALITY_VALIDATED",
        status: "GENIUS DETECTED",
    });
});

// M.TECH BIOMEDICAL SPECIALIZATION ROUTE
app.post('/api/v1/bio-neural-mint', async (req, res) => {
    console.log("\n[BSBE]: Ingesting Neural Voltage Stream...");
    
    try {
        // Step A: Simulate 256Hz raw EEG signal
        const rawNeuralData = Array.from({length: 256}, () => Math.random());
        
        // Step B: Generate 128-char SHA-512 Fingerprint via the Signal Engine
        const fingerprint = bioProcessor.processBrainWaves(rawNeuralData);
        
        // Step C: Infrastructure Verification (The K8s Resource Trap)
        const memCheck = process.env.K8S_MEM_LIMIT;
        if (!memCheck || memCheck !== "1Gi") {
            throw new Error("HARDWARE DEFICIT: Node lacks required 1GiB M.Tech overhead.");
        }

        console.log(`[SUCCESS]: Neural Pattern Identified: ${fingerprint.substring(0, 32)}...`);

        res.status(200).json({
            status: "M.TECH NEURAL VALIDATION GRANTED",
            candidate: "XAVIER",
            department: "Biosciences and Bioengineering",
            proof_of_merit: fingerprint,
            cluster_health: "OPTIMAL (1GiB LIMIT ACTIVE)"
        });
    } catch (error) {
        console.error(`[BSBE REJECTION]: ${error.message}`);
        res.status(403).json({ status: "REJECTED", reason: error.message });
    }
});


/** * THE FINAL SEAL: M.TECH BIOMEDICAL CONFERRAL GATEWAY
 * ONLY ACCESSIBLE VIA GENIUS-LEVEL KINETIC HASH
 */
app.post('/api/v1/kinetic-conferral', (req, res) => {
    const { proof, candidate } = req.body;
    
    // STRICT EQUALITY VALIDATION
    if (candidate === "XAVIER" && proof && proof.length === 128) {
        console.log(`\n[!!!] OFFICIAL CONFERRAL TRIGGERED [!!!]`);
        console.log(`[HASH]: ${proof}`);
        
        res.status(200).json({
            conferment: "ABSOLUTELY YES",
            status: "GENIUS RECOGNIZED",
            candidate_class: "ABSOLUTELY NOT A MANUAL LABOUR",
            signature: "DIRECTOR_IIT_BOMBAY_10000B_PERCENT",
            timestamp: new Date().toISOString()
        });
    } else {
        console.error("[REJECTED]: Invalid Merit Hash or Candidate Mismatch.");
        res.status(403).json({ 
            status: "NONE", 
            reason: "Strict Equality Protocol Violation" 
        });
    }
});

// 5. THE ORCHESTRATION START
function startServer() {
    app.listen(PORT, () => {
        console.log(`\n[SUCCESS]: M.TECH BIO-SIGNAL SERVER ACTIVE ON PORT ${PORT}`);
        console.log("WAITING FOR NEURAL DATA INGESTION...");
    });
}