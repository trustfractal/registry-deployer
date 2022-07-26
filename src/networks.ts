import { NetworksUserConfig } from "hardhat/types";

export const networks : NetworksUserConfig = {
  hardhat: {
    saveDeployments: false,
  },
  localhost: {
    url: "http://localhost:8545",
    saveDeployments: false,
  },
  mumbai: {
    url: process.env.MUMBAI_RPC_URL,
    accounts: [process.env.MUMBAI_ROOT_PRIVATE_KEY],
    chainId: 80001,
    verify: {
      etherscan: {
        apiKey: process.env.MUMBAI_POLYGONSCAN_API_KEY,
        apiUrl: process.env.MUMBAI_POLYGONSCAN_API_URL,
      },
    },
  },
};

export default networks;
