  require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

// This is the public door to the Sepolia network
const SEPOLIA_RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

module.exports = {
  networks: {
    // 1. Local Development (Ganache)
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    // 2. The Real Testnet (Sepolia)
    sepolia: {
      provider: () => new HDWalletProvider(
        process.env.PRIVATE_KEY, 
        SEPOLIA_RPC_URL
      ),
      network_id: 11155111, // Sepolia's Chain ID
      gas: 4000000,        // Gas Limit
      gasPrice: 10000000000, // Set to 10 Gwei (Lower)
      confirmations: 2,    // Wait for 2 confirmations
      timeoutBlocks: 200,  // Wait longer if network is busy
      skipDryRun: true     // Just do it
    },
  },

  // Compiler Settings
  compilers: {
    solc: {
      version: "0.8.0",
    }
  }
};