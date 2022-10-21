import { task } from "hardhat/config";
import { deployPlaygroundRegistry } from "../src/deploy";

task("deploy:playground-registry", "Deploys the PlaygroundRegistry")
  .addPositionalParam("root", "The root address")
  .addOptionalParam("delegates", "The delegate addresses")
  .setAction(deployPlaygroundRegistry);
