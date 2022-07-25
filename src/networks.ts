import { NetworksUserConfig } from "hardhat/types";

export const networks : NetworksUserConfig = {
  hardhat: {
    saveDeployments: false,
  },
  localhost: {
    url: "http://localhost:8545",
    saveDeployments: true, // TODO: change to false later
  },
};

export default networks;
