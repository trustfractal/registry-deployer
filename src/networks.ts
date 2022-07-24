import { NetworksUserConfig } from "hardhat/types";

export const networks : NetworksUserConfig = {
  hardhat: {},
  localhost: {
    url: "http://localhost:8545",
  },
};

export default networks;
