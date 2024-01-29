const hre = require("hardhat");

async function main() {
  
  const lock = await hre.ethers.deployContract("AccountFactory");

  await lock.waitForDeployment();

  console.log(
    `Account Factory deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
