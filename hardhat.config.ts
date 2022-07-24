import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import networks from "./src/networks";

import "./tasks";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks,
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    gasPrice: 100,
    currency: "USD",
  },
};

export default config;
