const hre = require("hardhat");

async function main() {
  const IoTDataStore = await hre.ethers.deployContract("IoTDataStore");
  await IoTDataStore.waitForDeployment();
  console.log(`IoTDataStore deployed to: ${IoTDataStore.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
