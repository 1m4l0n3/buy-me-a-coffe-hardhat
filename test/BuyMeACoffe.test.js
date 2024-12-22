const { ethers, deployments, network } = require("hardhat")
describe("BuyMeACoffe", function () {
  let deployer, buy_me_a_cofee
  beforeEach(async function () {
    ;[deployer, receiver, sender] = await ethers.getSigners()
    await deployments.fixture("buyCoffe")
    buy_me_a_cofee = await ethers.getContract("BuyMeACoffe")
  })
  describe("BuyCofee", () => {
    it("Memo should be stored when we buy a coffe", function () {
      buy_me_a_cofee.buyCoffe()
    })
  })
})
