const http = require('http');

// THE DIRECTOR'S FINAL QUESTION
const options = {
    hostname: '127.0.0.1',
    port: 3011,
    path: '/api/v1/verify-thread',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
};

console.log("\n--- IIT BOMBAY CONVOCATION CEREMONY INITIATED ---\n");
console.log("Verifying Candidate Infrastructure...");

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => { data += chunk; });

    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            
            // 1. VERIFY THE SIGNATURE
            if (response.directorSignature === "fe0911e2f41f956d77e3f7aa218db9e2f20e1ba3914fb86dabd225875ca871c3") {
                printDegree(response.blockHash);
            } else {
                throw new Error("FORGERY DETECTED. SIGNATURE MISMATCH.");
            }
        } catch (e) {
            console.error("\n[FAILURE]: The Dean denies your request.");
            console.error("REASON: " + e.message);
            process.exit(1);
        }
    });
});

req.on('error', (e) => {
    console.error(`\n[FATAL]: Cannot reach the Podium (Server). Did you run kubectl port-forward?`);
    console.error(e.message);
});

req.end();

function printDegree(hash) {
    const date = new Date().toLocaleDateString();
    console.log(`\n[SUCCESS]: IDENTITY CONFIRMED.`);
    console.log(`[PROOF]: Blockchain Hash ${hash.substring(0, 15)}...`);
    
    console.log(`
    ==================================================================================
    ||                                                                              ||
    ||                       INDIAN INSTITUTE OF TECHNOLOGY BOMBAY                  ||
    ||                                                                              ||
    ||                                  OFFICIAL                                    ||
    ||                           BACHELOR OF TECHNOLOGY                             ||
    ||                                                                              ||
    ||    This is to certify that upon the recommendation of the Senate,            ||
    ||                                                                              ||
    ||                                  XAVIER                                      ||
    ||                                                                              ||
    ||    has successfully deployed a Sharded, Dockerized, Kubernetes-Orchestrated  ||
    ||    Microservice Architecture with Blockchain Verification.                   ||
    ||                                                                              ||
    ||    Given this day: ${date}                                                 ||
    ||    Under the Strict Equality Protocol (10,000 Billion %)                     ||
    ||                                                                              ||
    ||    __________________________                  __________________________    ||
    ||    Registrar                                   DIRECTOR                      ||
    ||                                                                              ||
    ==================================================================================
    `);
    console.log("\n[INSTRUCTION]: You may now step down from the stage.");
}