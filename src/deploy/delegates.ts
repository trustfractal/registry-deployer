import { HardhatRuntimeEnvironment } from "hardhat/types";

export const addDelegates = async ({ addrs, registryAddress }: {addrs: string, registryAddress: string}, hre: HardhatRuntimeEnvironment) => {
  const addresses = addrs.split(",").map((addr: string) => addr.trim());
  if (addresses.length === 0) {
    throw new Error("No addresses provided");
  }

  const { deployer } = await hre.getNamedAccounts();
  const FractalRegistry =
    (await hre.ethers.getContractFactory("FractalRegistry"))
    .connect(await hre.ethers.getSigner(deployer))
    .attach(registryAddress);

  for (const addr of addresses) {
    try {
      await FractalRegistry.addDelegate(addr.toLowerCase());
      console.log(`${addr} ✅`);
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  }
};

export default addDelegates;
