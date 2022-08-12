import { task } from "hardhat/config";
import { addDelegates } from "../src/deploy";

task("add-delegates", "Adds delegate addresses to the FractalRegistry")
  .addPositionalParam("addrs", "The delegate addresses")
  .setAction(addDelegates);
