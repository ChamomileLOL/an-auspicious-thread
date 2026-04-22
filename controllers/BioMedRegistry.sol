// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BioMedRegistry {
    address public director;

    struct NeuralRecord {
        string fingerprint;
        uint256 timestamp;
        bool isAuspicious;
    }

    mapping(address => NeuralRecord) public researchData;

    constructor() {
        director = msg.sender;
    }

    // THE STRICT EQUALITY TRAP
    // The fingerprint must be exactly 128 characters (SHA-512)
    function verifyNeuralFingerprint(string memory _fingerprint) public {
        require(bytes(_fingerprint).length == 128, "INVALID_BIO_DATA: Fingerprint must be SHA-512");
        
        researchData[msg.sender] = NeuralRecord({
            fingerprint: _fingerprint,
            timestamp: block.timestamp,
            isAuspicious: true
        });
    }

    function getRecord(address _student) public view returns (string memory) {
        return researchData[_student].fingerprint;
    }
}