import { task } from "hardhat/config";

task("deploy", "Deploys the FractalRegistry")
  .addParam("root", "The root address")
  .setAction(async ({ root }, hre) => {
    try {
      const FractalRegistry = await hre.ethers.getContractFactory("FractalRegistry");
      const registry = await FractalRegistry.deploy(root);

      await registry.deployed();
      console.log(registry.address);
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
