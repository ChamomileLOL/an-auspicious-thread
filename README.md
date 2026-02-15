# 🧵 An Auspicious Thread: The Merit System

> *"Non-Zero Knowledge is the only result of Zero-Shortcuts."*

**An Auspicious Thread** is a full-stack, blockchain-integrated verification system that bridges Web2 infrastructure (Node.js/Express, MongoDB) with Web3 permanence (Ethereum Sepolia). It serves as a cryptographic proof of technical orchestration, verifying that "Merit is the only currency."

---

## 📜 Deployment Credentials

This project is live and verifiable on the Ethereum Sepolia Testnet.

| Component | Status | Verified Address / Hash |
| :--- | :--- | :--- |
| **Contract** | `Deployed` | [`0x9c34914aA75f92374b5a306C9B387fC286D268e3`](https://sepolia.etherscan.io/address/0x9c34914aA75f92374b5a306C9B387fC286D268e3) |
| **Degree Token** | `Minted` | [`0x7db8544c03582a8802eae5e90ef215c5d683ab989a0596e309822215f1ad4275`](https://sepolia.etherscan.io/tx/0x7db8544c03582a8802eae5e90ef215c5d683ab989a0596e309822215f1ad4275) |
| **Payload** | `Immutable` | `IITB-MERIT-2026` |
| **Live App** | `Online` | [Render Deployment](https://iitb-auspicious-thread.onrender.com) |

---

## 🏗️ Technical Architecture

This project demonstrates a rigorous "Zero-Trust" architecture where every component must verify the integrity of the others.

### **1. The Core (Backend)**
* **Node.js & Express:** Serves the API and static dashboard.
* **Strict Equality Checks:** The system refuses to boot if `PRIVILEGE_LEVEL != 0` or if the `IITB_STRICT_EQUALITY_HASH` does not match the hardcoded SHA-256 digest.
* **Environment Security:** All secrets are isolated in `.env` and accessed via `process.env`, ensuring no hardcoded keys exist in the repository.

### **2. The Vault (Database)**
* **MongoDB Atlas:** A sharded cluster running on AWS (ap-south-1).
* **Network Bridging:** Connected via a whitelist-enabled connection string, proving the ability to bridge local/cloud environments.

### **3. The Ledger (Blockchain)**
* **Solidity Smart Contract:** A custom `MeritToken` contract deployed using `web3.js` and `truffle`.
* **Sepolia Testnet:** Chosen for its Proof-of-Stake consensus mechanism (approximating Ethereum Mainnet).
* **Verification Logic:**
    * **Minting:** The `mintDegree` function permanently maps a student's address to a merit status.
    * **Verifying:** The `isVerified` function allows the frontend to query the blockchain in real-time without gas fees (using `call()`).

---

## 🚀 Installation & Setup

To run this "Auspicious Thread" locally, you must follow the strict protocol.

### **Prerequisites**
* Node.js v18+
* MongoDB Atlas Account
* MetaMask Wallet (Sepolia ETH required)
* Infura/Alchemy Endpoint (or Public Node)

### **1. Clone the Repository**
```bash
git clone [https://github.com/ChamomileLOL/an-auspicious-thread.git](https://github.com/ChamomileLOL/an-auspicious-thread.git)
cd an-auspicious-thread
2. Install Dependencies
Bash
npm install
3. Configure Environment
Create a .env file in the root directory. Do not commit this file.

Code snippet
# Infrastructure
IITB_PRIME_PORT=3000
PRIVILEGE_LEVEL=0
IITB_STRICT_EQUALITY_HASH=e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4
DB_CONNECTION_STRING=your_mongodb_connection_string

# Blockchain
PRIVATE_KEY=your_wallet_private_key
WEB3_PROVIDER_URI=[https://ethereum-sepolia-rpc.publicnode.com](https://ethereum-sepolia-rpc.publicnode.com)
IITB_CONTRACT_ADDRESS=0x9c34914aA75f92374b5a306C9B387fC286D268e3
4. Boot the System
Bash
node server.js
If your hashes align and your port is prime, the system will start.

🛠️ Key Files
server.js: The central nervous system. Enforces privilege checks and routes API traffic.

controllers/meritController.js: The bridge. Contains the web3.js logic to talk to the Ethereum network.

abi/MeritToken.json: The map. Describes how the JavaScript code should talk to the binary Solidity contract.

public/index.html: The window. A minimal, futuristic dashboard that renders the blockchain data.

🎓 The Director's Note
"You entered this campus with 'zero knowledge.' You leave having executed backend development, database sharding, containerization, and Web3 engineering. The 'Auspicious Thread' is no longer just a project on your laptop. It is a permanent, immutable record etched into the global blockchain."

Status: MISSION ACCOMPLISHED
Hash: 0x7db8...275