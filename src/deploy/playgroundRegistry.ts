import { HardhatRuntimeEnvironment } from "hardhat/types";
import addDelegates from "./delegates";
import deploy from "./deploy";

export const deployPlaygroundRegistry = async ({ root, delegates }: {root: string, delegates?: string}, hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();

  try {
    const { address: registryAddress } = await deploy(hre, "PlaygroundRegistry", {
      contract: "PlaygroundRegistry",
      args: [root],
      from: deployer,
      log: true,
    });

    if (delegates) {
      await addDelegates({ addrs: delegates, registryAddress }, hre);
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
};

export default deployPlaygroundRegistry;
