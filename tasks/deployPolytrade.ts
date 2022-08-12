import { task } from "hardhat/config";
import { deployPolytradeProxy } from "../src/deploy";

task("deploy:polytrade", "Deploys the PolytradeProxy")
  .setAction(deployPolytradeProxy);
