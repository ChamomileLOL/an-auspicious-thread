// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MeritToken {
    string public name = "IIT Bombay Merit Thread";
    string public symbol = "IITB";

    mapping(address => bool) public verifiedDegrees;

    function verifyDegree(address student) public {
        verifiedDegrees[student] = true;
    }

    function isVerified(address student) public view returns (bool) {
        return verifiedDegrees[student];
    }
}