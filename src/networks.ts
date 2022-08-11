import { NetworksUserConfig } from "hardhat/types";

import config from "./config";

export const networks : NetworksUserConfig = {
  hardhat: {
    saveDeployments: false,
  },
  localhost: {
    url: "http://localhost:8545",
    // saveDeployments: false,
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
};

export default networks;
