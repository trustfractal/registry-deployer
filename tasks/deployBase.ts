import { task } from "hardhat/config";
import deploy from "../src/deploy";

task("deploy:base", "Deploys the FractalRegistry")
  .addParam("root", "The root address")
  .setAction(async ({ root }, hre) => {
    const { deployer } = await hre.getNamedAccounts();

    try {
      await deploy(hre, "FractalRegistry", {
        contract: "FractalRegistry",
        args: [root],
        from: deployer,
        log: true,
      });
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
