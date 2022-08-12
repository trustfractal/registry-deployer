import { task } from "hardhat/config";
import { deployRegistry } from "../src/deploy";

task("deploy:registry", "Deploys the FractalRegistry")
  .addPositionalParam("root", "The root address")
  .addOptionalParam("delegates", "The delegate addresses")
  .setAction(deployRegistry);
