import { HardhatRuntimeEnvironment } from "hardhat/types";
import addDelegates from "./delegates";
import deploy from "./deploy";

export const deploySelfServeRegistryOperator = async (
  { registryAddress }: { registryAddress: string },
  hre: HardhatRuntimeEnvironment,
) => {
  const { deployer } = await hre.getNamedAccounts();

  try {
    const { address: operatorAddress } = await deploy(hre, "SelfServeRegistryOperator", {
      contract: "SelfServeRegistryOperator",
      args: [registryAddress],
      from: deployer,
      log: true,
    });

    await addDelegates({ addrs: operatorAddress, registryAddress }, hre);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
};

export default deploySelfServeRegistryOperator;
