import { task } from "hardhat/config";

const KYC_LEVEL = "plust";

task("deploy:polytrade", "Deploys the FractalRegistry and PolytradeProxy")
  .addParam("root", "The root address for the fractal registry")
  .setAction(async ({ root }, hre) => {
    try {
      const FractalRegistry = await hre.ethers.getContractFactory("FractalRegistry");
      const registry = await FractalRegistry.deploy(root);
    
      await registry.deployed();
      console.log(`registry address: ${registry.address}`);

      const PolytradeProxy = await hre.ethers.getContractFactory("PolytradeProxy");
      const proxy = await PolytradeProxy.deploy(registry.address, KYC_LEVEL);

      await proxy.deployed();
      console.log(`proxy address: ${proxy.address}`);
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
