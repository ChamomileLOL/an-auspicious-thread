/**
 * IIT BOMBAY - DEPARTMENT OF COMPUTER SCIENCE
 * PROJECT: AUSPICIOUS THREAD
 * AUTHORIZATION: DIRECTOR
 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto');
const app = express();

// 1. CONSTANT VERIFICATION
const PORT = process.env.IITB_PRIME_PORT;
const PRIVILEGE = process.env.PRIVILEGE_LEVEL;
const REQUIRED_HASH = crypto.createHash('sha256').update('MERIT_IS_THE_ONLY_CURRENCY').digest('hex');

console.log("\n--- IIT BOMBAY BOOT SEQUENCE INITIATED ---");

// 2. THE PRIVILEGE CHECK
if (PRIVILEGE != 0) {
    console.error(`[FATAL]: Privilege Level detected at ${PRIVILEGE}. Expected 0.`);
    process.exit(1);
} else {
    console.log("[PASS]: Privilege Level is Zero. Merit system active.");
}

// 3. THE INTEGRITY CHECK
if (process.env.IITB_STRICT_EQUALITY_HASH !== REQUIRED_HASH) {
    console.error("[FATAL]: Hash mismatch. You have altered the core values.");
    process.exit(1);
} else {
    console.log("[PASS]: Core Integrity Hash Verified.");
}

// 4. THE CONNECTION
const dbOptions = {
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000,
};

mongoose.connect(process.env.DB_CONNECTION_STRING, dbOptions)
    .then(() => {
        console.log("[PASS]: Database Connection Established.");
        console.log("[INFO]: Sharded Cluster handshake successful.");
        startServer();
    })
    .catch(err => {
        console.error(`[FATAL]: Database Connection Failed.`);
        console.error(`REASON: ${err.message}`);
    });

// --- NEW ROUTE INTEGRATION ---
const meritController = require('./controllers/meritController');

// Middleware
app.use(express.json());

// 5. STATIC ASSET SERVING
// This line tells Express to serve your HTML dashboard from the 'public' folder
app.use(express.static('public'));

// 6. API ROUTES
app.get('/api/v1/verify-thread', meritController.verifyThread);

// Note: The previous app.get('/') has been removed to allow express.static 
// to serve index.html as the primary landing page.

function startServer() {
    app.listen(PORT, () => {
        console.log(`\n[SUCCESS]: Server is running on STRICT PORT ${PORT}`);
        console.log("WAITING FOR REQUESTS...");
    });
}