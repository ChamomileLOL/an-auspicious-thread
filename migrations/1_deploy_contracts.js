const MeritToken = artifacts.require("MeritToken");

module.exports = function (deployer) {
  deployer.deploy(MeritToken);
};
