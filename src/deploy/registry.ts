import { HardhatRuntimeEnvironment } from "hardhat/types";
import addDelegates from "./delegates";
import deploy from "./deploy";

export const deployRegistry = async ({ root, delegates }: {root: string, delegates?: string}, hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();

  try {
    await deploy(hre, "FractalRegistry", {
      contract: "FractalRegistry",
      args: [root],
      from: deployer,
      log: true,
    });

    if (delegates) {
      await addDelegates({ addrs: delegates }, hre);
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
};

export default deployRegistry;
