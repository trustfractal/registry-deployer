import { task } from "hardhat/config";
import deploy from "../src/deploy";

const KYC_LEVEL = "plus";

task("deploy:polytrade", "Deploys the PolytradeProxy")
  .setAction(async (_args, hre) => {
    const { get } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();

    try {
      const registry = await get("FractalRegistry");

      await deploy(hre, "PolytradeProxy", {
        contract: "PolytradeProxy",
        args: [registry.address, KYC_LEVEL],
        from: deployer,
        log: true,
      });
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
