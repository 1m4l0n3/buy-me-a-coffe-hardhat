require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
module.exports = {
  solidity: "0.8.19",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
}
