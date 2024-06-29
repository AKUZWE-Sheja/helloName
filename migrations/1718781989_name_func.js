var NameFunc = artifacts.require('NameFunc');
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(NameFunc);
};