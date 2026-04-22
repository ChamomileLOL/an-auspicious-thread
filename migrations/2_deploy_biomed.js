const BioMedRegistry = artifacts.require("BioMedRegistry");

module.exports = function (deployer) {
  deployer.deploy(BioMedRegistry);
};