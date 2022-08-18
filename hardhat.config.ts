import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

import networks from "./src/networks";
import config from "./src/config";

import "./tasks";

const hardhatConfig: HardhatUserConfig = {
  solidity: "0.8.16",
  networks,
  gasReporter: {
    enabled: !!config.REPORT_GAS,
    gasPrice: 100,
    currency: "USD",
  },
  namedAccounts: {
    deployer: {
      default: 0,
      mumbai: config.MUMBAI_DEPLOYER_ADDRESS,
      polygon: config.POLYGON_DEPLOYER_ADDRESS,
      goerli: config.GOERLI_DEPLOYER_ADDRESS,
    },
  },
};

export default hardhatConfig;
