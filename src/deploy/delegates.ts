import { HardhatRuntimeEnvironment } from "hardhat/types";

export const addDelegates = async ({ addrs }: {addrs: string}, hre: HardhatRuntimeEnvironment) => {
  const addresses = addrs.split(",").map((addr: string) => addr.trim());
  if (addresses.length === 0) {
    throw new Error("No addresses provided");
  }

  const { execute } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  for (const addr of addresses) {
    try {
      await execute("FractalRegistry", { from: deployer }, "addDelegate", addr.toLowerCase());
      console.log(`${addr} ✅`);
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  }
};

export default addDelegates;
