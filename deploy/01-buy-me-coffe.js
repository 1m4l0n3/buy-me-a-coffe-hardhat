const { getNamedAccounts } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments
  const VERIFICATION_BLOCK_CONFIRMATIONS = 1
  const buyme = await deploy("BuyMeACoffe", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: VERIFICATION_BLOCK_CONFIRMATIONS,
  })
}
