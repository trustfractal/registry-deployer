import { HardhatRuntimeEnvironment } from "hardhat/types";
import deploy from "./deploy";

const KYC_LEVEL = "plus";

export const deployPolytradeProxy = async (_args: any, hre: HardhatRuntimeEnvironment) => {
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
};

export default deployPolytradeProxy;
