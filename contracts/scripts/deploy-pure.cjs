const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

async function main() {
    const artifactPath = path.resolve(__dirname, "../artifacts/contracts/IoTDataStore.sol/IoTDataStore.json");
    const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf-8"));
    
    // Connect to Ganache
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
    // Use the first unlocked account from Ganache
    const wallet = await provider.getSigner(0);

    console.log("Deploying contract...");
    const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
    const contract = await factory.deploy();
    await contract.waitForDeployment();
    
    console.log(`IoTDataStore deployed to: ${await contract.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
