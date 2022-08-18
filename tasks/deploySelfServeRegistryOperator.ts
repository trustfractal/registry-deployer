import { task } from "hardhat/config";
import { deploySelfServeRegistryOperator } from "../src/deploy";

task("deploy:selfServeRegistryOperator", "Deploys a SelfServeRegistryOperator")
  .addPositionalParam("registryAddress", "The operated FractalRegistry's address")
  .setAction(deploySelfServeRegistryOperator);
