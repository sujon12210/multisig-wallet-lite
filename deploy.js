const hre = require("hardhat");

async function main() {
  const [deployer, owner2, owner3] = await hre.ethers.getSigners();
  
  console.log("Deploying MultiSig with 3 owners...");
  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  
  // Set 2-of-3 signatures required
  const multisig = await MultiSig.deploy([deployer.address, owner2.address, owner3.address], 2);

  await multisig.waitForDeployment();
  console.log(`MultiSig deployed to: ${await multisig.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
