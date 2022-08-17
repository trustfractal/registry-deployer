import { NetworksUserConfig } from "hardhat/types";

import config from "./config";

export const networks : NetworksUserConfig = {
  hardhat: {
    saveDeployments: false,
  },
  localhost: {
    url: "http://localhost:8545",
    saveDeployments: true,
  },
  mumbai: {
    url: config.MUMBAI_RPC_URL,
    accounts: [config.MUMBAI_ROOT_PRIVATE_KEY],
    chainId: 80001,
    verify: {
      etherscan: {
        apiKey: config.MUMBAI_POLYGONSCAN_API_KEY,
        apiUrl: config.MUMBAI_POLYGONSCAN_API_URL,
      },
    },
  },
  polygon: {
    url: config.POLYGON_RPC_URL,
    accounts: [config.POLYGON_DEPLOYER_PRIVATE_KEY],
    chainId: 137,
    verify: {
      etherscan: {
        apiKey: config.POLYGON_POLYGONSCAN_API_KEY,
        apiUrl: config.POLYGON_POLYGONSCAN_API_URL,
      },
    },
  },
  goerli: {
    url: config.GOERLI_RPC_URL,
    accounts: [config.GOERLI_DEPLOYER_PRIVATE_KEY],
    chainId: 5,
    verify: {
      etherscan: {
        apiKey: config.GOERLI_ETHERSCAN_API_KEY,
        apiUrl: config.GOERLI_ETHERSCAN_API_URL,
      },
    },
  },
};

export default networks;
