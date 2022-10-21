import { task, types } from "hardhat/config";
import { addDelegates } from "../src/deploy";

task("add-delegates", "Adds delegate addresses to the FractalRegistry")
  .addPositionalParam("addrs", "The delegate addresses")
  .addParam(
    "registryAddress",
    "Address of the FractalRegistry (or PlaygroundRegistry) to operate on.",
    undefined,
    types.string,
    false,
  )
  .setAction(addDelegates);
