import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployOptions } from "hardhat-deploy/types";

export const deployFunc = (hre: HardhatRuntimeEnvironment, name: string, opts: DeployOptions) => {
  const { deploy } = hre.deployments;

  return deploy(name, {
    ...opts,
  });
};

export default deployFunc;
